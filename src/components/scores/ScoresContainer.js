import React, { useEffect, useState } from 'react';
import GameScore from './GameScore';

function getDate() {
    const today = new Date();
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const weekday = days[today.getDay()];
    const monthName = monthNames[today.getMonth()];

    return `${weekday}, ${monthName} ${today.getDate()}`;
};


function createGameScore(game) {
    return <GameScore
    key = {game.gamePk}
    awayTeam = {game.teams.away.team.name}
    awayScore = {game.teams.away.score}
    homeTeam = {game.teams.home.team.name}
    homeScore = {game.teams.home.score} />
};

const ScoresContainer = () => {
    const [gameList, setGameList] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const baseUrl = 'https://statsapi.web.nhl.com/api/v1/schedule';
        const fetchGames = async () => {
            try {
                const res = await fetch(baseUrl);
                const games = await res.json();
                setGameList(games.dates[0].games);
                setLoading(false);
            } catch (error) {
                console.log("Error", error)
            }
        };
        fetchGames();
    }, [])

    if(loading) return <div className='container mx-auto content-center text-center min-h-full text-4xl'><h1>Loading...</h1></div>
    
    return (
        <div className='container mx-auto max-w-6xl'>
            <div>
                <h1 className='text-4xl'>Scores</h1>
            </div>

            <div>
                <h2 className='text-3xl'>{getDate()}</h2>
            </div>
            {gameList.map(createGameScore)}
        </div>
    );
};

export default ScoresContainer;
