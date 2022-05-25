import "./login.css";

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../authentication.js";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Navbar_Custom from "../../navbar/Navbar.js";
import PageHeader from "../../page-header/PageHeader.js";

import Loading from "./loading.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      return Loading;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <div className="main-div">
      <div>
        <Navbar_Custom />
        <PageHeader name="Login" />
      </div>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Button
              className="login-button"
              variant="primary"
              onClick={() => logInWithEmailAndPassword(email, password)}
            >
              Login
            </Button>
            <Button
              className="login-button button-separator"
              variant="light"
              onClick={signInWithGoogle}
            >
              Login with Google
            </Button>
          </Form.Group>
          <Form.Group>
            <div>
              <Link to="/reset">Forgot Password</Link>
            </div>
            <div>
              Don't have an account? <Link to="/register">Register</Link> now.
            </div>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
