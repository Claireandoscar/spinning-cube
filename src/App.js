import React from "react";
import "./App.css";

// Import the logo and cube images
import logo from "./assets/logo.png";
import front from "./assets/front.png";
import back from "./assets/back.png";
import top from "./assets/top.png";
import bottom from "./assets/bottom.png";
import left from "./assets/left.png";
import right from "./assets/right.png";

const Cube = () => (
  <div className="cube">
    <div className="face front">
      <img src={front} alt="Front" />
    </div>
    <div className="face back">
      <img src={back} alt="Back" />
    </div>
    <div className="face top">
      <img src={top} alt="Top" />
    </div>
    <div className="face bottom">
      <img src={bottom} alt="Bottom" />
    </div>
    <div className="face left">
      <img src={left} alt="Left" />
    </div>
    <div className="face right">
      <img src={right} alt="Right" />
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <div className="content-container">
        <Cube />
        <img src={logo} alt="Musobloc Logo" className="logo" />
      </div>
    </div>
  );
}

export default App;