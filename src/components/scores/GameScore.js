import React from 'react';

const GameScore = (props) => {
  return (
    <div key={props.key} className='container mx-auto score-container m-10 max-w-2xl border-2'>
        <div className='away-container flex flex-row'>
            <div className='away-team m-5 min-w-[50%] text-3xl'>{props.awayTeam}</div>
            <div className='away-score m-5 text-4xl'>{props.awayScore}</div>
        </div>
        <div className='home-container flex flex-row'>
            <div className='home-team m-5 min-w-[50%] text-3xl'>{props.homeTeam}</div>
            <div className='home-score m-5 text-4xl'>{props.homeScore}</div>
        </div>
    </div>
  );
};

export default GameScore;
