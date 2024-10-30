import {useState,useEffect} from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    const handleIncrement =()=>{
        setCount(count+1)              //type1
    }
    const handleDecrement =()=>{
        setCount(prev=>(prev-1))       //type2
    }
    const handleReset =()=>{
        setCount(0)
    }

    useEffect(() => {
        // document.title = 'reloaded {count}';
        document.title = `Count: ${count}`;
    })

    return(
        <>
        <div className='counter-container'>
            <div className='counter-heading-container'>
                <h1 className='counter-heading'>Counter</h1>
            </div>
            <p className='count-display'>{count}</p>
            <button className='incr-button counter-button' onClick={handleDecrement}>Decrement</button>
            <button className='decr-button counter-button' onClick={handleIncrement}>Increment</button>
            <button className='reset-button counter-button' onClick={handleReset}>Reset</button>
        </div>
            
        </>
    );
}

export default Counter