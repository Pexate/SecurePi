import * as React from "react";
import "./form.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Navbar_Custom from "../navbar/Navbar.js";
import PageHeader from "../page-header/PageHeader.js";

export default function BasicTextFields() {
  return (
    <div className="main-div">
      <div>
        <Navbar_Custom />
      </div>
      <div className="form-container">
        <Form className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <span className="text-light">Email address</span>
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <span className="text-light">Password</span>
            </Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
