import React from "react";
import "./Header.css";
import logo from "../logo.png";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} className="logo" alt="logo" />
      <ul>
        <li>
          <a href="#Awards">Categories</a>
        </li>
        <li>
          <a href="#Benefits">Benfits</a>
        </li>
        <li>
          <a href="#index.html">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
