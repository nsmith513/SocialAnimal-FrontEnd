import React from 'react';
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";

export const PetNav = () => {

    const [fileName, setFileName] = React.useState("Upload")

    const onClick = () => {

    }


    return(

        <Navbar bg="light" expand="lg">
            <Navbar.Brand>Petsville</Navbar.Brand>
            <Form inline>
                <Form.File id="imageFile" className="mr-sm-2" hidden/>
                <Button><label for="imageFile" style={{cursor: "pointer"}}>Upload</label></Button>
            </Form>
        </Navbar>
    )
}