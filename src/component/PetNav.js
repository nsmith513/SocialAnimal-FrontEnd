import React from "react";
import { Button, Form, FormControl, Nav, Navbar, Modal } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
export const PetNav = () => {
  const [showModal, setShowModal] = useState(false);
  const [link, setLink] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const handleChange = (e) => {
    setLink(e.target.value);
  };
  const saveImage = () => {
    console.log(link);
    // if link is not empty
    if (link) {
      axios
        .post("API server", {
          link: link,
        })
        .then(function (response) {
          // handle success
          console.log(response);
          setLink("");
          setShowModal(false);
          setModalMessage("Submitted");
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          setModalMessage("failed");
        });
    }
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Petsville</Navbar.Brand>
        {/* <Form inline>
                    <Form.File id="imageFile" className="mr-sm-2" hidden/>
                    <Button><label htmlFor="imageFile" style={{cursor: "pointer"}}>Upload</label></Button>
                </Form> */}
        <Button onClick={() => handleClick()}>Upload</Button>
      </Navbar>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            style={{ width: "100%" }}
            type="text"
            placeholder="Image link"
            onChange={(e) => handleChange(e)}
          ></input>
          <p style={{ color: "red" }}>{modalMessage}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => saveImage()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
