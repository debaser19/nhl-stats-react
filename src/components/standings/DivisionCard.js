import React from 'react'

const DivisionCard = (props) => {
    return (
        <div>
            <h2 className='text-2xl'>{props.division}</h2>
            <ul>
                <li>{props.teamRecords[0].team.name}</li>
            </ul>
        </div>
    )   
}
export default DivisionCard      