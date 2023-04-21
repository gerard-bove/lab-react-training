import { useState } from "react";

export default function Carousel({images}) {
    const [imageIndex, setImageIndex] = useState(0);

    const imgLeftHandle = () => {
        if(imageIndex === 0) setImageIndex(3);
        else setImageIndex(imageIndex -1);
    }

    const imgRightHandle = () => {
        if(imageIndex === 3) setImageIndex(0);
        else setImageIndex(imageIndex + 1);
    }

    return(
        <div className="carousel-container">
            <button onClick={imgLeftHandle}>Left</button>
            <img src={images[imageIndex]} alt='patata'/>
            <button onClick={imgRightHandle}>Right</button>
        </div>
    )
}