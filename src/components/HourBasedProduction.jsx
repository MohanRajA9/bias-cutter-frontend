import React from 'react';
import { Line } from 'react-chartjs-2'
import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

Chartjs.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
)



function HourBasedProduction() {

    const options = {}

    const data = {
        labels:[
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10"
            
        ],
        datasets:[
            {
                label:"Completed",
                data:[0,2,2.8,4,5,6.8,7.9,10],
                borderColor: "red"
            }
        ]
    };

    return (
        <div>
        
            <div className='hourBasedProduction-heading' >
                <header><h3>Hour Based Production</h3></header>
            </div>

            <div className='hourBasedProduction' ><Line options={options} data={data} /></div>
        
        </div>
        
    )
}

export default HourBasedProduction