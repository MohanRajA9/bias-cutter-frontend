import React, { useEffect, useState } from 'react';

function TimeMinutesSeconds() {
    const [time, setTime] = useState("00:00:00")
    useEffect(() => {
        setInterval(() => {
            const currentTime = new Date();
            const hours = currentTime.getHours()
            const minutes = currentTime.getMinutes()
            const seconds = currentTime.getSeconds()
            // console.log(`${hours}:${minutes}:${seconds}`)
            setTime(`${hours}:${minutes}:${seconds}`)
        }, 1000)
    }, [])
    return (
        <div className='time' >
            <div>{time}</div>
        </div>
    )
}

export default TimeMinutesSeconds