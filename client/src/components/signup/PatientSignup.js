import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {Link} from "react-router-dom"
import { Container } from "react-bootstrap";

export default function PatientSignup(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dob = useRef();
  const conf_password = useRef();
  const password = useRef();
  const email = useRef();
  const name = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!verifyPassword()) {
      alert("Passwords must match!");
      return;
    }

    const isodob = new Date(dob.current.value).toISOString();

    fetch("/patient/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
        dob: isodob,
        name: name.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success == true) handleShow();
        else alert("Error Signing up!");
      })
      .catch( err => { alert(err) } )
  };

  const verifyPassword = () => {
    return password.current.value === conf_password.current.value;
  };

  return (
    <Container>
      <h5> Sign up to access the Psyconnectme Patient platform </h5>

      <div className="signup-form">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Name *</Form.Label>
            <Form.Control
              ref={name}
              required
              type="text"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address*</Form.Label>
            <Form.Control
              ref={email}
              required
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="sessionBuilder.DateSelect">
            <Form.Label>Date of Birth *: </Form.Label>
            <Form.Control ref={dob} required type="date"></Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password*</Form.Label>
            <Form.Control
              ref={password}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPasswordConfirm">
            <Form.Label >Confirm Password*</Form.Label>
            <Form.Control
              ref={conf_password}
              type="password"
              placeholder="Same password"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You're signed up!, Press NEXT to go to the login page
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to="/patients/login">
            <Button variant="success" onClick={handleClose}>
              NEXT
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
