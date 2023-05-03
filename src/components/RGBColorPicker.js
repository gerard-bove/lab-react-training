import { useState } from "react"
import SingleColorPicker from "./SingleColorPicker";

export default function RGBColorPicker() {
    const [rValue, setRValue] = useState(0);
    const [gValue, setGValue] = useState(0);
    const [bValue, setBValue] = useState(0);

    return(
        <div>
            <SingleColorPicker 
                color="r"
                value={rValue}
                onChange={ (value) => { setRValue(value) } }
            />

            <SingleColorPicker 
                color="g"
                value={gValue}
                onChange={ (value) => { setGValue(value)  } }
            />

            <SingleColorPicker 
                color="b"
                value={bValue}
                onChange={ (value) => { setBValue(value)  } }
            />

            <div className="square-container">
                <div className="square" style= {{backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`}}></div>
                <div>
                    <p>rgb {rValue}, {gValue}, {bValue}</p>
                </div>
            </div>
        </div>
    )
}