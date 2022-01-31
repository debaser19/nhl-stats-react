import React from 'react';
import { useState, useEffect } from 'react';
import PointsLeader from './PointsLeader';

function createPointsLeader(leader) {
    return <PointsLeader
    key={leader.person.id}
    rank={leader.rank}
    player={leader.person.fullName}
    value={leader.value} />
};

const PointsLeaders = () => {
    const [pointsLeaders, setPointsLeaders] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const baseUrl = 'https://statsapi.web.nhl.com/api/v1/stats/leaders?leaderCategories=points&season=20212022';
        const fetchPointsLeaders = async () => {
            try {
                const res = await fetch(baseUrl);
                const leaders = await res.json();
                setPointsLeaders(leaders.leagueLeaders[0].leaders);
                setLoading(false);
            } catch (error) {
                console.log("Error", error)
            }
        };
        fetchPointsLeaders();
    }, [])

    if(loading) return <div className='container mx-auto content-center text-center min-h-full text-4xl'><h1>Loading...</h1></div>

    return (
        <div>
            <h2 className='text-2xl'>Points Leaders</h2>
            <table className='table-auto text-center'>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {pointsLeaders.map(createPointsLeader)}
                </tbody>
            </table>
        </div>
    )
}

export default PointsLeaders;
