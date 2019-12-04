import React, { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const darkFunction = () => {
    darkMode
      ? document.querySelector("body").classList.remove("dark-mode")
      : document.querySelector("body").classList.add("dark-mode");
  };

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    darkFunction();
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
