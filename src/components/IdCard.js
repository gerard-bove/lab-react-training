
function IdCard(props) {
    const {lastName, firstName, gender, height, birth, picture} = props;
    return (
        <div className="card user-card">
            <img src={picture} alt={lastName}/>
            <div>
                <p><span className='negrita'>First name: </span>{lastName}</p>
                <p><span className='negrita'>Last name: </span>{firstName}</p>
                <p><span className='negrita'>Gender: </span>{gender}</p>
                <p><span className='negrita'>Height: </span>{height}</p>
                <p><span className='negrita'>Birth: </span>{birth.toDateString()}</p>
            </div>
        </div>
    );
}

export default IdCard;