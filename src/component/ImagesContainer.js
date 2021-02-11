import React from 'react';
import {Img} from "./Img";
import {imageArray} from './images/constants'
import {Container, Row} from "react-bootstrap";

export const ImagesContainer = () => {

    const [images, setImages] = React.useState([]);
    
    React.useEffect(()=>{
        const fetchImages = async () => {
            const response = await fetch("https://dog.ceo/api/breeds/image/random/50");
            const data = await response.json();
            console.log(data);
            setImages(data);
        }
        fetchImages();
    },[])

    const showImages = () => {
        if(images.message === undefined){
            return(
                <h1>Loading</h1>
            )
        } else {
            return images.message.map((image)=> {
                console.log(image)
                return(
                    <Img imageName={image} key={image}/>
                )
            })
        }
    }

    return(
        <Container fluid>
            <Row>
                {showImages()}
            </Row>
        </Container>
    )
}