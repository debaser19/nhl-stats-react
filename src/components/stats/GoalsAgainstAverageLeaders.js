import React from 'react';
import { useState, useEffect } from 'react';

const GoalsAgainstAverageLeaders = () => {
    const [goalsAgainstAverageLeaders, setGoalsAgainstAverageLeaders] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const baseUrl = 'https://statsapi.web.nhl.com/api/v1/stats/leaders?leaderCategories=gaa&season=20212022';
        const fetchGoalsAgainstAverageLeaders = async () => {
            try {
                const res = await fetch(baseUrl);
                const leaders = await res.json();
                setGoalsAgainstAverageLeaders(leaders.leagueLeaders[0].leaders);
                setLoading(false);
            } catch (error) {
                console.log("Error", error);
            }
        };
        fetchGoalsAgainstAverageLeaders();
    }, [])

    if(loading) return (
        <div className='container mx-auto content-center text-center min-h-full text-4xl'>
            <h1>Loading...</h1>
        </div>
    );

    return (
        <div>
            <h2 className='text-2xl'>GAA Leaders</h2>
            <table className='table-auto text-center'>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>GAA</th>
                    </tr>
                </thead>
                <tbody>
                    {goalsAgainstAverageLeaders.map(goalsAgainstAverageLeader => (
                        <tr key={goalsAgainstAverageLeader.key}>
                            <td>{goalsAgainstAverageLeader.person.fullName}</td>
                            <td>{goalsAgainstAverageLeader.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GoalsAgainstAverageLeaders;
