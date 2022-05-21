import "./Homepage.css";
//import Button from "react-bootstrap/Button";
import Navbar_Custom from "../navbar/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div
      className={localStorage.getItem("theme") === "light" ? "light" : "dark"}
    >
      <header className="App-header">
        <Navbar_Custom></Navbar_Custom>
      </header>
    </div>
  );
}

if (
  localStorage.getItem("theme") === undefined ||
  localStorage.getItem("theme") === null
) {
  localStorage.setItem("theme", "dark");
}

export default App;
