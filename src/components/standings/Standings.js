import React, { useEffect, useState } from 'react';
import DivisionCard from './DivisionCard'

function createDivisionCard(standings) {
    return <DivisionCard
    key = {standings.division.id}
    division = {standings.division.name}
    teamRecords = {standings.teamRecords}
    />
}

const Standings = () => {
    const [standingsList, setStandingsList] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const baseUrl = 'https://statsapi.web.nhl.com/api/v1/standings';
        const fetchStandings = async () => {
            try {
                const res = await fetch(baseUrl);
                const standings = await res.json();
                setStandingsList(standings.records);
                setLoading(false);
            } catch (error) {
                console.log('Error', error)
            }
        };
        fetchStandings();
    }, []);

    if(loading) return <div className='container mx-auto content-center text-center min-h-full text-4xl'><h1>Loading...</h1></div>

    return (
        <div className='container mx-auto content-center'>
            <div className = 'grid grid-cols-2 gap-4'>
                {standingsList.map(createDivisionCard)}
            </div>
        </div>
    )
}

export default Standings
