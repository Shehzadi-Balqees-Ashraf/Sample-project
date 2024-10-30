import { useState } from "react";

import dice1 from './assets/png-dice-1.png';
import dice2 from './assets/png-dice-2.jpg';
import dice3 from './assets/png-dice-3.png';
import dice4 from './assets/png-dice-4.png';
import dice5 from './assets/png-dice-5.png';
import dice6 from './assets/png-dice-6.png';


function DiceRoller(){
    const diceImages = [dice1,dice2,dice3,dice4,dice5,dice6]
     const [diceResult,setDiceResult] = useState(6);

     function handleDiceRoller(){
        setDiceResult(Math.floor(Math.random()*6+1))
        
     }
     const selectedDiceImage = diceImages.filter((_,i)=>diceResult===i+1);

    return(
    <>
        <div className="dice-roller-heading"><h2>Dice Roller</h2></div>
        <button className="roll-dice-button" onClick={handleDiceRoller}>Roll Dice</button>
        <div className="dice-result">{diceResult}</div>
        <div className="dice-image"><img src={selectedDiceImage} alt="Displaying dice image here" /></div>
    </>);
}

export default DiceRoller