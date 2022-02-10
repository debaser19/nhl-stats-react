import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

function parseRecord(leagueRecord) {
	return `${leagueRecord.wins}-${leagueRecord.losses}-${leagueRecord.ot}`
}

function parseGameTime(timeString) {
	return format(new Date(timeString), 'h:mm a')
}

const GameScore = (props) => {
  let gameBorder = ''
  switch (props.gameState) {
    case '7': // game final
      gameBorder = 'border-red-400';
      break;
    
    case '6': // overtime?
      gameBorder = 'border-orange-400'
      break;

    case '5': // 3rd period
      gameBorder = 'border-green-400';
      break;

    case '4': // 2nd period
      gameBorder = 'border-green-400';
      break;

    case '3': // 1st period
      gameBorder = 'border-green-400';
      break;

    case '2': // pre-game
      gameBorder = 'border-yellow-400';
      break;
    
    case '1': // game scheduled - not started
      gameBorder = 'border-slate-300';
  };

  const [timeRemaining, setTimeRemaining] = useState(2);
  const [currentPeriod, setCurrentPeriod] = useState(1);

  useEffect(() => {
    const getTimeRemaining = async (gameUrl) => {
      const baseUrl = 'https://statsapi.web.nhl.com'
      const res = await fetch(baseUrl + gameUrl);
      const data = await res.json();
      setCurrentPeriod(data.liveData.linescore.currentPeriodOrdinal)
      setTimeRemaining(data.liveData.linescore.currentPeriodTimeRemaining)
    };
    getTimeRemaining(props.gameUrl);
  });

  return (
    <div className={'container mx-auto score-container m-2 max-w-2xl border-2 ' + gameBorder}>
        <div className='away-container flow-root'>
			<div className='time-venue-div'>
				<p>{parseGameTime(props.gameTime)}</p>
        <p>{currentPeriod}</p>
        <p>{timeRemaining}</p>
				<p>{props.venue}</p>
			</div>
			<div className='away-team mx-2 min-w-[50%] float-left'>
            	<div className='text-2xl'>{props.awayTeam}</div>
				<div className='text-gray-400'>{parseRecord(props.awayRecord)}</div>
			</div>
            <div className='away-score mx-5 text-3xl float-right'>{props.awayScore}</div>
        </div>
        <div className='home-container flow-root'>
			<div className='home-team mx-2 min-w-[50%] float-left'>
            	<div className='text-2xl'>{props.homeTeam}</div>
				<div className='text-gray-400'>{parseRecord(props.homeRecord)}</div>
			</div>
			<div className='home-score mx-5 text-3xl float-right'>{props.homeScore}</div>
        </div>
    </div>
  );
};

export default GameScore;
