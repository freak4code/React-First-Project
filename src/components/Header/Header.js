import React from "react";
import "./Header.css";
import logo from "../../books.svg";

const Header = () => {
  // Render HTML
  return (
    <div className="header">
      <img src={logo} alt="logo_book"></img>
      <h2>Nowhere Book Library</h2>
      <h4>If you don’t like to read, you haven’t found the right book !</h4>
    </div>
  );
};

export default Header;
