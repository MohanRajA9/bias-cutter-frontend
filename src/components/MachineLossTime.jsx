import React from 'react';
import {Pie} from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js'

ChartJS.register(Tooltip, Legend, ArcElement)
 
function MachineLossTime() {

    const options = {}

    const data = {
        labels:[
            "Run Time",
            "LossTime"
        ],
        datasets:[
            {
                label:"Machine Loss Time",
                data:[8,0.8],
                backgroundColor:[
                    "green",
                    "yellow"
                ],
                hoverOffset:4
            },
            
        ]
    }

    return(
        <div>
            <div className='MachineLossTime-heading' >
                <header><h3>Machine Loss Time</h3></header>
            </div>

            <div className='machineLossTime' ><Pie options={options} data={data} /></div>

        </div>
    )
}

export default MachineLossTime