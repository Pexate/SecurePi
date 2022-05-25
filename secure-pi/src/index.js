import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Downloads from "./downloads/Downloads.js";
import Homepage from "./home-page/Homepage.js";
import Instructions from "./instructions/Instructions.js";
import Loginpage from "./firebase/login/login.js";
import reportWebVitals from "./reportWebVitals";
import Register from "./firebase/register/register.js";
import Reset from "./firebase/reset/reset.js";
import Dashboard from "./firebase/dashboard/dashboard.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

if (localStorage.getItem("theme") !== "light") {
  document.getElementById("root").style.backgroundColor = "#212529";
} else {
  document.getElementById("root").style.backgroundColor = "#f8f9fa";
}

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/instructions" element={<Instructions />} />

      <Route path="/downloads" element={<Downloads />} />

      <Route path="/login" element={<Loginpage />} />

      <Route path="/register" element={<Register />} />

      <Route path="/reset" element={<Reset />} />

      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
/*
root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
