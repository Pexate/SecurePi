import "./Instructions.css";
import "../shared-styles/page-titles.css";
//import Button from "react-bootstrap/Button";
import Navbar_Custom from "../navbar/Navbar.js";
import PageHeader from "../page-header/PageHeader.js";
import "bootstrap/dist/css/bootstrap.min.css";

let theme = localStorage.getItem("theme");

if (theme === undefined || theme === null) {
  theme = "dark";
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar_Custom></Navbar_Custom>
      </header>
      <main className="main">
        <PageHeader />
        <h2 className={theme}>wow this is cool</h2>
      </main>
    </div>
  );
}

export default App;
