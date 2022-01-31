import React from 'react';

const GameScore = (props) => {
  let gameFinal = false;
  if (props.gameState === 'Final') {
    gameFinal = true;
  };

  return (
    <div key={props.key} className={'container mx-auto score-container m-2 max-w-2xl border-2 ' + (gameFinal ? 'border-red-400' : '')}>
        <div className='away-container flow-root'>
            <div className='away-team m-5 min-w-[50%] text-2xl float-left'>{props.awayTeam}</div>
            <div className='away-score m-5 text-3xl float-right'>{props.awayScore}</div>
        </div>
        <div className='home-container flow-root'>
            <div className='home-team m-5 min-w-[50%] text-2xl float-left'>{props.homeTeam}</div>
            <div className='home-score m-5 text-3xl float-right'>{props.homeScore}</div>
        </div>
    </div>
  );
};

export default GameScore;
