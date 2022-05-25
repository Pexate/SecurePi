import "./Navbar.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth } from "../firebase/authentication.js";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
let theme = localStorage.getItem("theme");

if (theme === undefined || theme === null) {
  theme = "dark";
}

const themeReverse = theme === "dark" ? "light" : "dark";

function Navbar_Custom() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg={theme} expand="lg" variant={theme}>
          <Container>
            <Nav.Item>
              <a href="/">
                <Image
                  rounded={true}
                  className="logo-img"
                  src="@/../pi-logo-test.svg"
                ></Image>
              </a>
              <Navbar.Brand className="logo-text" href="/">
                <span>
                  <code className={theme + "-text-logo logo-text"}>
                    SecurePi
                  </code>
                </span>
              </Navbar.Brand>
            </Nav.Item>
            <Nav.Item>
              <Button
                className="button-left button"
                variant={"outline-" + themeReverse}
                href={user === null ? "/login" : "/dashboard"}
              >
                {user === null ? "Login" : "Dashboard"}
              </Button>
              <Button
                className="button-left button"
                variant={"outline-" + themeReverse}
                href="/instructions"
              >
                <code>
                  <span className={theme}>Instructions</span>
                </code>
              </Button>
              <Button
                className="button-left button"
                variant={"outline-" + themeReverse}
                href="/downloads"
              >
                <code>
                  <span className={theme}>Downloads</span>
                </code>
              </Button>

              <Button
                className="button"
                variant={"outline-" + themeReverse}
                onClick={
                  localStorage.getItem("theme") === "light"
                    ? () => {
                        localStorage.setItem("theme", "dark");
                        document.location.reload();
                      }
                    : () => {
                        localStorage.setItem("theme", "light");
                        document.location.reload();
                      }
                }
              >
                <code>
                  <span className={theme}>
                    {localStorage.getItem("theme") === "light"
                      ? "Dark"
                      : "Light"}
                  </span>
                </code>
              </Button>
            </Nav.Item>

            {returnEmail(user?.email)}
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

const returnEmail = (email) => {
  if (email) {
    return (
      <Nav.Item>
        <code>
          <span className={theme}>{email}</span>
        </code>
      </Nav.Item>
    );
  }
  return;
};
export default Navbar_Custom;

/*
            <Nav.Item>
              <Button
                variant={"outline-" + themeReverse}
                onClick={
                  localStorage.getItem("theme") === "light"
                    ? () => {
                        localStorage.setItem("theme", "dark");
                        document.location.reload();
                      }
                    : () => {
                        localStorage.setItem("theme", "light");
                        document.location.reload();
                      }
                }
              >
                {localStorage.getItem("theme") === "light" ? "Dark" : "Light"}
              </Button>
            </Nav.Item>
*/
