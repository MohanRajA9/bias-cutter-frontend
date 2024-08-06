import React, { useEffect, useState } from 'react';
import { URL } from '../global';
import axios from 'axios';
function ShiftDetails() {
    const [shiftDetails, setShiftDetails] = useState({})
    let [shiftNo, setShiftNo] = useState(1)
    

    function fetchShiftDetails(shiftNo) {
        try {
            axios.get(`${URL}/shift-details/details/${shiftNo}`)
                .then((res) => {
                    // console.log(res)
                    setShiftDetails(res.data)
                })
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        const MyInterval = setInterval(()=>{
            setShiftNo(shiftNo+=1)
            // console.log(shiftNo)
        },10000)

        setTimeout(()=>{
            clearInterval(MyInterval)
            // console.log("this is after fifty seconds")
        },50000)
    }, [])

    useEffect(()=>{
        fetchShiftDetails(shiftNo)
    },[shiftNo])

    // console.log(shiftDetails.targetAchieve)

    return (
        <div className='shift-details' >

            <div className='shift-elements' >
                <header>Operator Name</header>
                <div className='name-list' >
                    {shiftDetails.operaterName?.map((item, index) => {
                        return <p key={index} >{item}</p>
                    })}
                </div>
            </div>

            <div className='shift-elements' >
                <table><thead>
                    <tr>
                        <th style={{ fontWeight: 800, fontSize: "large" }} >Plan</th>
                        <th style={{ fontWeight: 800, fontSize: "large" }} >Complete</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr>
                            <td id='plan' >{shiftDetails.plan}</td>
                            <td id='complete' >{shiftDetails.complete}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='shift-elements' >
                <header>Target Achieved</header>
                <p id='targetAchieve' >{shiftDetails.targetAchieve}%</p>
            </div>

            <div className='shift-elements' >
                <header>Total FAB Meters</header>
                <p style={{ marginTop: "30px", textAlign: "center" }} >{shiftDetails.totalFabMeters}</p>
            </div>

            <div className='shift-elements' >
                <header>Machine</header>
                <p style={{ marginTop: "30px", textAlign: "center" }} >{shiftDetails.machine}</p>
            </div>

        </div>
    )
}

export default ShiftDetails