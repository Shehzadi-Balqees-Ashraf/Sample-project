import { useState , useEffect , useRef } from "react";
import Counter from './Counter.jsx'

function StopWatch(){

    const [isRunning,setIsRunning] = useState(false);
    const [elapsedTime,setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now()-startTimeRef.current)
            },10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);


    function startStopwatch(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stopStopwatch(){
        setIsRunning(false);
    }

    function resetStopwatch(){
        setElapsedTime(0)
        setIsRunning(false);
    }

    function formatTime(){

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        // let milliseconds = Math.floor((elapsedTime % 1000) / 10)

        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        // milliseconds = String(milliseconds).padStart(2,"0");
        return(`${hours}:${minutes}:${seconds}`);
    }


    return(
        <>
            <div className="stopwatch-and-counter-main-container">
                <div className="stopwatch-container">
                    <div className="stopwatch-heading-container">
                        <h1 className="stopwatch-h1">Stopwatch</h1>
                    </div>
                    <div className="stopwatch-timer-container">
                        <h3 className="stopwatch-h3">{formatTime()}</h3>
                        <div className="stopwatch-button-container">
                            <div className="stopwatch-start-btn">
                                <button onClick={startStopwatch}>Start</button>
                            </div>
                            <div className="stopwatch-stop-btn">
                                <button onClick={stopStopwatch}>Stop</button>
                            </div>
                            <div className="stopwatch-reset-btn">
                            <button onClick={resetStopwatch}>Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <Counter />
                </div>
            </div>
        </>
    );
}
export default StopWatch