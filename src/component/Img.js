import React from 'react';
import {Col, Image} from "react-bootstrap";

export const Img = (props) => {

    return(
        <Col xs={6} md={4}>
            <Image thumbnail src={props.imageName}/>
        </Col>
    )
}