import React, { useState } from "react";
import "./Switcher.css";

const Switcher = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span style={{ color: darkMode ? "blue" : "#ffff" }}></span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#ffff" : "blue" }}></span>
      </div>
      <div>
        <h1> {darkMode ? "Dark" : "Light"} </h1>
      </div>
    </div>
  );
};
export default Switcher;
