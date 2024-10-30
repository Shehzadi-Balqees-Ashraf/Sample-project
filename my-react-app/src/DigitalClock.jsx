import { useEffect, useState } from "react";

function DigitalClock(){

    const [time,setTime] = useState(new Date())

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date());
        },1000);


        return()=>{
            clearInterval(intervalId);
         }
    },[])

    function formatTime(){
    
    let hours = time.getHours().toString().padStart(2,0);
    const minutes = time.getMinutes().toString().padStart(2,0);
    const seconds = time.getSeconds().toString().padStart(2,0);
    const meridians = hours>=12 ? "PM" : "AM";
    // hours = hours % 12 || 12;
    return `${hours}:${minutes}:${seconds} ${meridians}`;
    }

    

    return(
    <>
        <div className="digital-clock-container">
            <p className="timer-display">{formatTime()}</p>
        </div>
    </>
);
}

export default DigitalClock