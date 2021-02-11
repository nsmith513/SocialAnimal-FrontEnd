import React from 'react';
import {Img} from "./Img";
import {imageArray} from './images/constants'
import {Container, Row} from "react-bootstrap";

export const ImagesContainer = () => {

    const [images, setImages] = React.useState([]);
    
    React.useEffect(()=>{
        const fetchImages = async () => {
            const response = await fetch("http://localhost:8080/api/pet/getAll");
            const data = await response.json();
            console.log(data);
            setImages(data);
        }
        fetchImages();
    },[])

    const showImages = () => {
        if(images === undefined){
            return(
                <h1>Loading</h1>
            )
        } else {
            return images.map((image)=> {
                console.log(image)
                return(
                    <Img imageName={image.link} key={image.id}/>
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