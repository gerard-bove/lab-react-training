function Random({min, max}) {
    const rand = min + Math.floor(Math.random()*(max-min));
    return (
        <div className="card">
            <p>Random value between {min} and {max} => {rand}</p>
        </div>
    )
}

export default Random;