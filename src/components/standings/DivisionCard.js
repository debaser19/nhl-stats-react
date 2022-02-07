import React from 'react';

const DivisionCard = (props) => {
    return (
        <div>
            <h2 className='text-2xl'>{props.division}</h2>
            <table className='standings-table'>
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Points</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>OT</th>
                    </tr>
                </thead>
                <tbody>
                    {props.teamRecords.map(teams => (
                        <tr key={teams.team.id}>
                            <td>{teams.team.name}</td>
                            <td>{teams.points}</td>
                            <td>{teams.leagueRecord.wins}</td>
                            <td>{teams.leagueRecord.losses}</td>
                            <td>{teams.leagueRecord.ot}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default DivisionCard;