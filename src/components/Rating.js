function Rating({children}) {
    return(
        <span className="card-text">
            {children < 0.5 && <p><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i></p> }
            {children >= 0.5 && children < 1.5 && <p><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i></p> }
            {children >= 1.5 && children < 2.5 && <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i></p> }
            {children >= 2.5 && children < 3.5 && <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i></p> }
            {children >= 3.5 && children < 4.5 && <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></p> }
            {children >= 4.5 && <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p> }
        </span>
    );
}

export default Rating;