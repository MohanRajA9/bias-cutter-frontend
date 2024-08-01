import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

function MachineDownTime() {

    const options = {}
    const data = {
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8"
        ],
        datasets: [
            {
                label:"Down Time",
                data:[0,0,5,0,25,0,5,0],
                backgroundColor:"orange",
                borderColor:"red",
                borderWidth:1
            }
        ]
    }

    return (
        <div>
            <div className='machineDownTime-heading' >
                <header><h3>MachineDownTime</h3></header>
            </div>
            <div className='machineDownTime' ><Bar options={options} data={data} /></div>
        </div>
    )
}

export default MachineDownTime

