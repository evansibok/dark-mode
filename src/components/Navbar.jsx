import React, { useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

const Navbar = () => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-theme", false);

  useEffect(() => {
    darkMode
      ? document.querySelector("body").classList.add("dark-mode")
      : document.querySelector("body").classList.remove("dark-mode");
    return () => {};
  }, [darkMode]);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
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
