import React from "react";
import { Col, Image } from "react-bootstrap";
const imgClass = {
  width: "450px",
  height: "400px",
  marginBottom: "5px",
};
export const Img = (props) => {
  return (
    <Col xs={6} md={4}>
      <Image style={imgClass} thumbnail src={props.imageName} />
    </Col>
  );
};
