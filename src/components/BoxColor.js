function BoxColor({r, g, b}) {
    const divStyle = {
        backgroundColor: `rgb(${r} ${g} ${b})`,
        height: 100
    }
    return (
        <div style={divStyle}>
        </div>
    )
}

export default BoxColor;