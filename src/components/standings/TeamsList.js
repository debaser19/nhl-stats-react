import React from 'react'

const TeamsList = (props) => {
    return (
        <tr>
            <td>{props.teamName}</td>
            <td><strong>{props.teamPoints}</strong></td>
            <td>{props.teamWins}</td>
            <td>{props.teamLosses}</td>
            <td>{props.teamOT}</td>
        </tr>
    )
}

export default TeamsList
