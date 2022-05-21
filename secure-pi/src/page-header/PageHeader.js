import "./PageHeader.css";
import "../shared-styles/page-titles.css";
//import Button from "react-bootstrap/Button";
import Navbar_Custom from "../navbar/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";

let style = "dark";

function PageHeader(props) {
  return (
    <div className="PageHeader">
      <code
        className={
          style !== "dark"
            ? "light-theme big-title-main big-title-main1"
            : "big-title-main big-title-main1"
        }
      >
        Instructions
      </code>
      <code className="big-title-main big-title-main2">Instructions</code>
      <code className="big-title-main big-title-main3">Instructions</code>
    </div>
  );
}

/*
<div className="big-title-main-container">
          <code
            className={
              style !== "dark"
                ? "light-theme big-title-main big-title-main1"
                : "big-title-main big-title-main1"
            }
          >
            Instructions
          </code>
          <code className="big-title-main big-title-main2">Instructions</code>
          <code className="big-title-main big-title-main3">Instructions</code>
        </div>
*/

export default PageHeader;
