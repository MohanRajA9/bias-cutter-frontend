import React from 'react';
import MachineDownTime from './MachineDownTime';
import HourBasedProduction from './HourBasedProduction';
import MachineLossTime from './MachineLossTime';

function Visualization() {
    return (
        <div style={{ display: 'block' }} >
            <div className='visualization' >
                <div className='visualization-elements' >
                    <div  ><HourBasedProduction /></div>
                    <div><MachineDownTime /></div>
                </div>


            </div>

            <div className='visualization-machineLossTime' >
                <div className='machineLossTime' ><MachineLossTime /></div>
            </div>

        </div>

    )
}

export default Visualization