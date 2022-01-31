import React from 'react';
import { useState, useEffect } from 'react';
import GoalsLeader from './GoalsLeader';

function createGoalsLeader(leader) {
    return <GoalsLeader
    key={leader.person.id}
    rank={leader.rank}
    player={leader.person.fullName}
    value={leader.value} />
};

const GoalsLeaders = () => {
    const [goalsLeaders, setGoalsLeaders] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const baseUrl = 'https://statsapi.web.nhl.com/api/v1/stats/leaders?leaderCategories=goals&season=20212022';
        const fetchGoalsLeaders = async () => {
            try {
                const res = await fetch(baseUrl);
                const leaders = await res.json();
                setGoalsLeaders(leaders.leagueLeaders[0].leaders);
                setLoading(false);
            } catch (error) {
                console.log("Error", error)
            }
        };
        fetchGoalsLeaders();
    }, [])

    if(loading) return <div className='container mx-auto content-center text-center min-h-full text-4xl'><h1>Loading...</h1></div>

    return (
        <div>
            <h2 className='text-2xl'>Goals Leaders</h2>
            <table className='table-auto text-center'>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player</th>
                        <th>Goals</th>
                    </tr>
                </thead>
                <tbody>
                    {goalsLeaders.map(createGoalsLeader)}
                </tbody>
            </table>
        </div>
    )
}

export default GoalsLeaders;
