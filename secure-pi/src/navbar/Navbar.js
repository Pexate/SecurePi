import "./Navbar.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar_Custom() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" expand="lg" variant="light">
          <Container>
            <Nav.Item>
              <Image
                rounded={true}
                className="logo-img"
                src="@/../pi-logo-test.svg"
              ></Image>
              <Navbar.Brand className="logo-text" href="/">
                <span>
                  <code className="logo-text">SecurePi</code>
                </span>
              </Navbar.Brand>
            </Nav.Item>
            <Nav.Item>
              <Button className="button-left" variant="outline-light">
                Link your Pi
              </Button>

              <Button className="button-left" variant="outline-light">
                Instructions
              </Button>

              <Button variant="outline-light">Downloads</Button>
            </Nav.Item>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default Navbar_Custom;
