import { useState } from 'react';

function LikeButton() {
    const [counter, setCounter] = useState(0);
    let colors = ['purple','blue','green','yellow','orange','red']

    const increase = () => {
        if(counter === 5) setCounter(0);
        else setCounter(counter + 1);
    }

    return (
        <button onClick={increase} style={{margin: '5px', color: 'white', backgroundColor: colors[counter]}}>Likes {counter}</button>
    )
}

export default LikeButton;