import React from 'react';

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

  return (
    <div key={props.key} className={'container mx-auto score-container m-2 max-w-2xl border-2 ' + gameBorder}>
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
