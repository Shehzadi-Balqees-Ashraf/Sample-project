import { useState } from "react";

function DigitalClock(){

    const [time,setTime] = useState(new Date())

    return(
    <>
        <div className="digital-clock-container">
            <p className="timer-display">00:00:00</p>
        </div>
    </>
);
}

export default DigitalClock