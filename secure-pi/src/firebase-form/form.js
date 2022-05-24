import * as React from "react";
import "./form.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Navbar_Custom from "../navbar/Navbar.js";
import PageHeader from "../page-header/PageHeader.js";

import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./authentication.js";

export default function BasicTextFields() {
  return (
    <div className="main-div">
      <div className="form-container">
        <Form className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <span
                className={
                  localStorage.getItem("theme") === "light" ? "" : "text-light"
                }
              >
                Email address
              </span>
            </Form.Label>
            <Form.Control
              className={
                localStorage.getItem("theme") === "light"
                  ? "input-field"
                  : "input-field textfield-dark"
              }
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <span
                className={
                  localStorage.getItem("theme") === "light" ? "" : "text-light"
                }
              >
                Password
              </span>
            </Form.Label>
            <Form.Control
              className={
                localStorage.getItem("theme") === "light"
                  ? "input-field"
                  : "input-field textfield-dark"
              }
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group>
            <Button className="login-button" variant="primary" type="submit">
              Login
            </Button>
            <Button
              className="login-button button-separator"
              variant="light"
              type="submit"
            >
              Login with Google
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
