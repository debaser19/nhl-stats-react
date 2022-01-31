import React from 'react';
import { useState, useEffect } from 'react';
import SavePercentageLeader from './SavePercentageLeader';

function createSavePercentageLeader(leader) {
    return <SavePercentageLeader
    key={leader.person.id}
    rank={leader.rank}
    player={leader.person.fullName}
    value={leader.value} />
};

const SavePercentageLeaders = () => {
    const [savePercentageLeaders, setSavePercentageLeaders] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const baseUrl = 'https://statsapi.web.nhl.com/api/v1/stats/leaders?leaderCategories=savePct&season=20212022';
        const fetchSavePercentageLeaders = async () => {
            try {
                const res = await fetch(baseUrl);
                const leaders = await res.json();
                setSavePercentageLeaders(leaders.leagueLeaders[0].leaders);
                setLoading(false);
            } catch (error) {
                console.log("Error", error)
            }
        };
        fetchSavePercentageLeaders();
    }, [])

    if(loading) return <div className='container mx-auto content-center text-center min-h-full text-4xl'><h1>Loading...</h1></div>

    return (
        <div>
            <h2 className='text-2xl'>SV% Leaders</h2>
            <table className='table-auto text-center'>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player</th>
                        <th>SV%</th>
                    </tr>
                </thead>
                <tbody>
                    {savePercentageLeaders.map(createSavePercentageLeader)}
                </tbody>
            </table>
        </div>
    )
}

export default SavePercentageLeaders;
