import React from 'react';
import {Img} from "./Img";

export const ImagesContainer = () => {

    const [images, setImages] = React.useState([]);
    React.useEffect(()=>{
        const fetchImages = async () => {
            const response = await fetch("");
            const data = await response.json();
            setImages(data);
        }
        fetchImages();
    },[])

    const showImages = () => {
        images.map(()=> {
            return(
                <Img />
            )
        })
    }

    return(
        <div>
            <h1>Images</h1>
            {showImages()}
        </div>
    )
}