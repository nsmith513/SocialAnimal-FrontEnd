import React from 'react';
import {Img} from "./Img";
import {imageArray} from './images/constants'

export const ImagesContainer = () => {

    const [images, setImages] = React.useState([]);
    React.useEffect(()=>{
        const fetchImages = async () => {
            // const response = await fetch("");
            // const data = await response.json();
            // setImages(data);
        }
        fetchImages();
    },[])

    const showImages = () => {
        return imageArray.map((image)=> {
            return(
                <Img imageName={image.petName} key={image.petName}/>
            )
        })
    }

    return(
        <div>
            {showImages()}
        </div>
    )
}