import React, { useEffect, useState } from 'react';
import GameScore from './GameScore';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css'

function createGameScore(game) {
    return <GameScore
    key = {game.gamePk}
    awayTeam = {game.teams.away.team.name}
    awayScore = {game.teams.away.score}
    awayRecord = {game.teams.away.leagueRecord}
    homeTeam = {game.teams.home.team.name}
    homeRecord = {game.teams.home.leagueRecord}
    homeScore = {game.teams.home.score}
    gameState = {game.status.codedGameState}
    gameTime = {game.gameDate} />
};

const GameScores = () => {
    const [gameList, setGameList] = useState();
    const [loading, setLoading] = useState(true);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const baseUrl = 'https://statsapi.web.nhl.com/api/v1/schedule/';
    let fullUrl = baseUrl;
    useEffect(() => {
        if (selectedDate) {
            const dateString = format(selectedDate, 'yyyy-MM-dd')
            fullUrl = `${baseUrl}?date=${dateString}`;
        } else {
            fullUrl = baseUrl;
        }      
        const fetchGames = async () => {
            try {
                const res = await fetch(fullUrl);
                const games = await res.json();
                setGameList(games.dates[0].games);
                setLoading(false);
            } catch (error) {
                console.log("Error", error);
            }
        };
        fetchGames();
    }, [selectedDate]);

    if(loading) return (
        <div className='container'>
            <div className='date-picker-div'>
                <h2 className='text-2xl'>Select a date</h2>
                <DatePicker
                    className='date-picker'
                    todayButton='Today'
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    dateFormat='yyyy-MM-dd'
                />
            </div>
            <h1 className='content-center text-center min-h-full text-4xl'>Loading...</h1>
        </div>
    );

    return (
        <div className='container mx-auto max-w-6xl'>
            <div className='date-picker-div'>
                <h2 className='text-2xl'>Select a date</h2>
                <DatePicker
                    className='date-picker'
                    todayButton='Today'
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    dateFormat='yyyy-MM-dd'
                />
            </div>

            <div>
                <h1 className='text-4xl'>Scores</h1>
            </div>

            <div>
                <h2 className='text-3xl'>{format(selectedDate, 'EEEE LLLL d, yyyy')}</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {gameList.map(createGameScore)}
            </div>
        </div>
    );
};

export default GameScores;
