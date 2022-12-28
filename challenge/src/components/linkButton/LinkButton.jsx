import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const LinkButton = ({ to, txt}) => {
  return(
    <Link to={to} className="btn-link">{txt}</Link>
  );
}

export default LinkButton;