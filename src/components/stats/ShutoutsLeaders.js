import React from 'react';
import { useState, useEffect } from 'react';
import ShutoutsLeader from './ShutoutsLeader';

function createShutoutsLeader(leader) {
    return <ShutoutsLeader
    key={leader.person.id}
    rank={leader.rank}
    player={leader.person.fullName}
    value={leader.value} />
};

const ShutoutsLeaders = () => {
    const [shutoutsLeaders, setShutoutsLeaders] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const baseUrl = 'https://statsapi.web.nhl.com/api/v1/stats/leaders?leaderCategories=shutouts&season=20212022';
        const fetchShutoutsLeaders = async () => {
            try {
                const res = await fetch(baseUrl);
                const leaders = await res.json();
                setShutoutsLeaders(leaders.leagueLeaders[0].leaders);
                setLoading(false);
            } catch (error) {
                console.log("Error", error)
            }
        };
        fetchShutoutsLeaders();
    }, [])

    if(loading) return <div className='container mx-auto content-center text-center min-h-full text-4xl'><h1>Loading...</h1></div>

    return (
        <div>
            <h2 className='text-2xl'>Shutouts Leaders</h2>
            <table className='table-auto text-center'>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player</th>
                        <th>Shutouts</th>
                    </tr>
                </thead>
                <tbody>
                    {shutoutsLeaders.map(createShutoutsLeader)}
                </tbody>
            </table>
        </div>
    )
}

export default ShutoutsLeaders;
