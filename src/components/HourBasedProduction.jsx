import React, { useEffect, useState } from 'react';
import { URL } from '../global';
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
import axios from 'axios';

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
    let [shiftNo, setShiftNo] = useState(1)
    const [array, setArray] = useState([])
    // console.log(array)


    const getHourDetails = (shiftNo) => {
        try {
            axios.get(`${URL}/hour-based-production/get-hours/${shiftNo}`)
                .then((res) => {
                    setArray(res.data.hourBasedProduction)
                    // console.log(res.data.hourBasedProduction)
                })

        } catch (err) {
            console.error(err.messsage)
        }
    }

    useEffect(()=>{
        const myInterval = setInterval(()=>{
            setShiftNo(shiftNo+=1)
            // console.log(shiftNo)
        },10000)
        setTimeout(()=>{
            clearInterval(myInterval)
            // console.log("interval cleared")
        },70000)
    },[])

    useEffect(()=>{
        getHourDetails(shiftNo)
    },[shiftNo])

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
            "8",
            "9",
            "10"

        ],
        datasets: [
            {
                label: "Completed",
                data: array,
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