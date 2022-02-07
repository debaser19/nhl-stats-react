import React from 'react';
import GoalsLeaders from './GoalsLeaders';
import AssistsLeaders from './AssistsLeaders';
import PointsLeaders from './PointsLeaders';
import GoalsAgainstAverageLeaders from './GoalsAgainstAverageLeaders';
import ShutoutsLeaders from './ShutoutsLeaders';
import SavePercentageLeaders from './SavePercentageLeaders';

const Stats = () => {
    return (
        <div className='stats'>
            <div className='container mx-auto max-w-6xl'>
                <h1 className='text-3xl text-center my-4'>Player Stat Leaders</h1>
                <div className="grid grid-cols-3 gap-4">
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

                <h1 className='text-3xl text-center my-4'>Goalie Stat Leaders</h1>
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <GoalsAgainstAverageLeaders />
                    </div>
                    <div>
                        <SavePercentageLeaders />
                    </div>
                    <div>
                        <ShutoutsLeaders />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
