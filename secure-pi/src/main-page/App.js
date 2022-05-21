import "./App.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" expand="lg" variant="light">
          <Container>
            <Navbar.Brand className="logo-text" href="/">
              <span>
                <code className="logo-text">SecurePi</code>
              </span>
            </Navbar.Brand>
            <Nav.Item>
              <Image Src="../../public/logo192.png"></Image>
            </Nav.Item>
          </Container>
        </Navbar>
        <Button>Test</Button>
      </header>
    </div>
  );
}

export default App;
