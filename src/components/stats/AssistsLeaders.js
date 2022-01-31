import React from 'react';
import { useState, useEffect } from 'react';
import AssistsLeader from './AssistsLeader';

function createAssistsLeader(leader) {
    return <AssistsLeader
    key={leader.person.id}
    rank={leader.rank}
    player={leader.person.fullName}
    value={leader.value} />
};

const AssistsLeaders = () => {
    const [assistsLeaders, setAssistsLeaders] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const baseUrl = 'https://statsapi.web.nhl.com/api/v1/stats/leaders?leaderCategories=assists&season=20212022';
        const fetchAssistsLeaders = async () => {
            try {
                const res = await fetch(baseUrl);
                const leaders = await res.json();
                setAssistsLeaders(leaders.leagueLeaders[0].leaders);
                setLoading(false);
            } catch (error) {
                console.log("Error", error)
            }
        };
        fetchAssistsLeaders();
    }, [])

    if(loading) return <div className='container mx-auto content-center text-center min-h-full text-4xl'><h1>Loading...</h1></div>

    return (
        <div>
            <h2 className='text-2xl'>Assists Leaders</h2>
            <table className='table-auto text-center'>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player</th>
                        <th>Assists</th>
                    </tr>
                </thead>
                <tbody>
                    {assistsLeaders.map(createAssistsLeader)}
                </tbody>
            </table>
        </div>
    )
}

export default AssistsLeaders;
