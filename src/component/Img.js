import React from 'react';
import {Image} from "react-bootstrap";

export const Img = (props) => {

    console.log(props)

    return(
        <div>
            <Image src={props.imageName}/>
        </div>
    )
}