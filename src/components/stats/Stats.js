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
                <div className='player-stats-container'>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className='leader-div'>
                            <GoalsLeaders />
                        </div>
                        <div className='leader-div'>
                            <AssistsLeaders />
                        </div>
                        <div className='leader-div'>
                            <PointsLeaders />
                        </div>
                    </div>
                </div>

                <h1 className='text-3xl text-center my-4'>Goalie Stat Leaders</h1>
                <div className='goalie-stats-container'>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className='leader-div'>
                            <GoalsAgainstAverageLeaders />
                        </div>
                        <div className='leader-div'>
                            <SavePercentageLeaders />
                        </div>
                        <div className='leader-div'>
                            <ShutoutsLeaders />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
