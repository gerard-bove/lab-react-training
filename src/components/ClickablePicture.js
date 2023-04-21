import { useState } from "react";

function ClickablePicture({ img, imgClicked }) {
    const [imgSelected, setImgSelected] = useState(img);

    const imageHandle = () => {
        if(imgSelected === img) setImgSelected(imgClicked)
        else setImgSelected(img);
    }

    return(
        <button onClick={imageHandle}><img src={imgSelected} alt='selected'/></button>
    )
}

export default ClickablePicture;