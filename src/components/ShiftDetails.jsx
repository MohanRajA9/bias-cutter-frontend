import React, { useEffect, useState } from 'react';
import { URL } from '../global';
import axios from 'axios';
function ShiftDetails() {
    const [shiftDetails, setShiftDetails] = useState({})
    useEffect(() => {
        try {
            axios.get(`${URL}/shift-details/1`)
                .then((res) => {
                    console.log(res)
                    setShiftDetails(res.data)
                })
        } catch (error) {
            console.error(error.message)
        }
    }, [])
    console.log(shiftDetails.targetAchieved)
    return (
        <div className='shift-details' >

            <div className='shift-elements' >
                <header>Operator Name</header>
                <div className='name-list' >
                    {shiftDetails.operaterName?.map((item, index)=>{
                        return <p key={index} >{item}</p>
                    })}
                </div>
            </div>

            <div className='shift-elements' >
                <table><thead>
                    <tr>
                        <th>Plan</th>
                        <th>Complete</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr>
                        
                            <td>{shiftDetails.plan}</td>
                            <td>{shiftDetails.complete}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='shift-elements' >
                <header>Target Achieved</header>
                <p>{shiftDetails.targetAchieve}%</p>
            </div>

            <div className='shift-elements' >
                <header>Total FAB Meters</header>
                <p>{shiftDetails.totalFabMeters}</p>
            </div>

            <div className='shift-elements' >
                <header>Machine</header>
                <p>{shiftDetails.machine}</p>
            </div>

        </div>
    )
}

export default ShiftDetails