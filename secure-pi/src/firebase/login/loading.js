import Spinner from "react-bootstrap/Spinner";
import "./loading.css";

export default function Loading() {
  return (
    <div className="box-container">
      <Spinner animation="border" variant={localStorage.getItem("theme")} />
    </div>
  );
}
