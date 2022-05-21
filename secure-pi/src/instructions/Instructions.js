import "./Instructions.css";
//import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar_Custom from "../navbar/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";

let style = "dark";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar_Custom></Navbar_Custom>
      </header>
      <main className={style}>
        <div className="big-title-main-container">
          <code className="big-title-main big-title-main1">Instructions</code>
          <code className="big-title-main big-title-main2">Instructions</code>
          <code className="big-title-main big-title-main3">Instructions</code>
        </div>
      </main>
    </div>
  );
}

export default App;
