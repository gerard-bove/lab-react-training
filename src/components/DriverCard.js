import Rating from './Rating';
function DrivenCard({name, rating, img, car}) {
    const imagen = img;
    return (
        <div className="card driver-card">
            <img src={imagen} alt={car.licensePlate}  />
            <div>
                <p>{name}</p>
                <Rating>{rating}</Rating>
                <p>{car.model}{car.licensePlate}</p>
            </div>
        </div>
        
    )
}

export default DrivenCard;