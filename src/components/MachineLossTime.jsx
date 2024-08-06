import React, { useEffect, useState } from 'react';
import { URL } from '../global.js';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js'
import axios from 'axios';

ChartJS.register(Tooltip, Legend, ArcElement)

function MachineLossTime() {

    const [array, setArray] = useState([])
    let [shiftNo, setShiftNo] = useState(1)

    function fetchMachineLossTime(shiftNo) {
        try {
            axios.get(`${URL}/machine-loss-time/get-loss-time/${shiftNo}`)
                .then((res) => {
                    setArray(res.data.machineLossTime)
                    // console.log(res.data.machineLossTime)
                })

        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        const myInterval = setInterval(() => {
            setShiftNo(shiftNo += 1)
            // console.log(shiftNo)
        }, 10000)
        setTimeout(() => {
            clearInterval(myInterval)
            // console.log("interval Cleared")
        }, 70000)
    }, [])

    useEffect(() => {
        fetchMachineLossTime(shiftNo)
    }, [shiftNo])

    const options = {
        responsive:true,
        plugins:{
            legend:{
                position:"bottom"
            }
        }
    }

    const data = {
        labels: [
            "Run Time in Hours",
            "Loss Time in Hours"
        ],
        datasets: [
            {
                label: "Machine Loss Time",
                data: array,
                backgroundColor: [
                    "green",
                    "yellow"
                ],
                hoverOffset: 4
            },

        ]
    }

    return (
        <div>
            <div className='MachineLossTime-heading' >
                <header><h3>Machine Loss Time</h3></header>
            </div>

            <div className='machineLossTime' ><Pie options={options} data={data} /></div>

        </div>
    )
}

export default MachineLossTime