import "./Navbar.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

let theme = localStorage.getItem("theme");

if (theme === undefined || theme === null) {
  theme = "dark";
}

let themeReverse = theme === "dark" ? "light" : "dark";

function Navbar_Custom() {
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
                  <code className={theme + " logo-text"}>SecurePi</code>
                </span>
              </Navbar.Brand>
            </Nav.Item>
            <Nav.Item>
              <Button
                className="button-left"
                variant={"outline-" + themeReverse}
              >
                Link your Pi
              </Button>

              <Button
                className="button-left"
                variant={"outline-" + themeReverse}
                href="/instructions"
              >
                Instructions
              </Button>

              <Button variant={"outline-" + themeReverse}>Downloads</Button>
            </Nav.Item>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default Navbar_Custom;
