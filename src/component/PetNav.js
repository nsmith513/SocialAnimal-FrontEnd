import React from 'react';
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";

export const PetNav = () => {

       return(

        <Navbar bg="light" expand="lg">
            <Navbar.Brand>Petsville</Navbar.Brand>
            <Form inline>
                <Form.File id="imageFile" className="mr-sm-2" hidden/>
                <Button><label htmlFor="imageFile" style={{cursor: "pointer"}}>Upload</label></Button>
            </Form>
        </Navbar>
    )
}