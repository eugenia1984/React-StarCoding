import React from "react";
import { Link } from "react-router-dom";
import { NAVBAR } from "../../international";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      {NAVBAR.map((element) => (
        <Link to={element.to} className="navbar-link">
          {element.text}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
