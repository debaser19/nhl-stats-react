import React from 'react'
import TeamsList from './TeamsList'

const DivisionCard = (props) => {
    const getTeams = (teams) => {
        return <TeamsList
        key = {teams.team.id}
        teamName = {teams.team.name}
        teamPoints = {teams.points}
        teamWins = {teams.leagueRecord.wins}
        teamLosses = {teams.leagueRecord.losses}
        teamOT = {teams.leagueRecord.ot} />
    }
    return (
        <div>
            <h2 className='text-2xl'>{props.division}</h2>
            <table className = 'standings-table'>
                <thead>
                    <tr>
                        <td>Team</td>
                        <td>Points</td>
                        <td>Wins</td>
                        <td>Losses</td>
                        <td>OT</td>
                    </tr>
                </thead>
                <tbody>
                    {props.teamRecords.map(getTeams)}
                </tbody>
            </table>
        </div>
    )   
}
export default DivisionCard      