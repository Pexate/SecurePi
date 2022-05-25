import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../authentication.js";
import "./Register.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Navbar_Custom from "../../navbar/Navbar.js";
import PageHeader from "../../page-header/PageHeader.js";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    //if (user) history.push("/dashboard");
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
                Full name
              </span>
            </Form.Label>
            <Form.Control
              className={
                localStorage.getItem("theme") === "light"
                  ? "input-field"
                  : "input-field textfield-dark"
              }
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
            />
          </Form.Group>

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
              onClick={register}
            >
              Register
            </Button>
            <Button
              className="login-button button-separator"
              variant="light"
              onClick={signInWithGoogle}
            >
              Register with Google
            </Button>
          </Form.Group>
          <Form.Group>
            <div style={{ marginTop: "5px" }}>
              <span className={localStorage.getItem("theme")}>
                Already have an account? <Link to="/login">Login</Link> now.
              </span>
            </div>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

/*
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    //if (user) history.push("/dashboard");
  }, [user, loading]);
  return (
    <div className="register">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="register__btn" onClick={register}>
          Register
        </button>
        <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        <div>
          Already have an account? <Link to="/login">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Register;

*/
