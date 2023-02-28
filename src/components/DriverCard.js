import Rating from './Rating';
function DrivenCard({name, rating, img, car}) {
    const imagen = img;
    return (
        <div className="card">
            <img src={imagen} alt="driver image" className="card-image" />
            <div>
                <p>{name}</p>
                <Rating>{rating}</Rating>
                <p>{car.model}{car.licensePlate}</p>
            </div>
        </div>
        
    )
}

export default DrivenCard;