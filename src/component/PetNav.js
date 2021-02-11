import React from 'react';
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";

export const PetNav = () => {

    const onClick = () => {

    }


    return(

        <Navbar bg="light" expand="lg">
            <Navbar.Brand>Petsville</Navbar.Brand>
            {/*<input type="file" class="form-control" id="imageFile"/>*/}
            <Form.File id="imageFile"/>




                {/*<input type="file"  name="pic" accept="image/*"/>*/}

        </Navbar>
    )
}