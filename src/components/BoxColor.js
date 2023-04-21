function BoxColor({r, g, b}) {
    const divStyle = {
        backgroundColor: `rgb(${r} ${g} ${b})`,
        height: '100px'
    }
    return (
        <div className="box-color" style={divStyle}>
            <p>rgb({r},{g},{b})</p>
            <p># {((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}</p>
        </div>
    )
}

export default BoxColor;