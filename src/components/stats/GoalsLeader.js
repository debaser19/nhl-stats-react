import React from 'react';

const GoalsLeader = (props) => {
    return (
        <tr key={props.key}>
            <td>{props.rank}</td>
            <td className='text-left'>{props.player}</td>
            <td>{props.value}</td>
        </tr>
    );
}

export default GoalsLeader;
