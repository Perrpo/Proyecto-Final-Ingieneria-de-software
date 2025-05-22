// client/src/App.js
import React from "react";
import "./App.css";
import logo from "./logo.png";
import Login from "./Login";

function App() {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="Energytic logo" />
      </div>
      <Login />
    </div>
  );
}

export default App;
