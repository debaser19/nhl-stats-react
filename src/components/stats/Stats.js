import React from 'react';
import GoalsLeaders from './GoalsLeaders';
import AssistsLeaders from './AssistsLeaders';
import PointsLeaders from './PointsLeaders';

const Stats = () => {
    return (
        <div className='container mx-auto max-w-6xl'>
            <h1 className='text-3xl'>This is the stats page</h1>
            <div>
                <GoalsLeaders />
            </div>
            <div>
                <AssistsLeaders />
            </div>
            <div>
                <PointsLeaders />
            </div>
        </div>
    );
};

export default Stats;
