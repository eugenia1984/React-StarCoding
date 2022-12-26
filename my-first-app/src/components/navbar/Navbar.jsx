import React from "react";
import { Link } from "react-router-dom";
import { NAVBAR } from "../../international";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="my-4">
      {NAVBAR.map((element, index) => (
        <Link to={element.to} className="navbar-link" key={index}>
          {element.text}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
