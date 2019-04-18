import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div className="contact-section">
          <Form className="contact-form">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="xyz@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> 
        </div>
      </div>
    );
  }
}
