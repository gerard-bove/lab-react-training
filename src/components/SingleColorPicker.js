
export default function SingleColorPicker({color, value, onChange}) {

    
    return(
        <div className="square-container">
            <div className="square" style={{backgroundColor: `rgb(${value}, 0, 0)`}}></div>
            <div>
                <label>{color}:</label>
                <input type="number" onChange={(e)=>{onChange(e.target.value)}} value={value}/>
            </div>
        </div>
    )
}