import { useState } from 'react';

import emptyDice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

export default function Dice() {
    const [diceState, setDiceState] = useState(0);
    
    const diceArray = [emptyDice, dice1, dice2, dice3, dice4, dice5, dice6];

    const diceHandle = () => {
        setDiceState(0);
        setTimeout(() => {
            setDiceState(Math.ceil(Math.random()*6));
        }, "1000");
    }
    return(
        <button onClick={diceHandle}><img style={{width: '200px'}} src={diceArray[diceState]} alt='dice'/></button>
    )
}