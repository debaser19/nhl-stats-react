import React, { useState, useEffect } from 'react';
import LinescorePeriods from './LinescorePeriods';
import AwayGoals from './AwayGoals';
import HomeGoals from './HomeGoals';

const Linescore = (props) => {
    const [periods, setPeriods] = useState(props.linescore.periods);

    const createPeriods = (linescore) => {
        return <LinescorePeriods period={linescore.ordinalNum} />;
    }

    const createAwayGoals = (linescore) => {
        return <AwayGoals goals={linescore.away.goals} />;
    }

    const createHomeGoals = (linescore) => {
        return <HomeGoals goals={linescore.home.goals} />;
    }
    
    return (
        <div className='linescore-container'>
            <table>
                <thead>
                    <tr>
                        {periods.map(createPeriods)}
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {periods.map(createAwayGoals)}
                        <td>{props.linescore.teams.away.goals}</td>
                    </tr>
                    <tr>
                        {periods.map(createHomeGoals)}
                        <td>{props.linescore.teams.home.goals}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Linescore;
