import React from "react";
import "./style.css";

const Error = ({ text }) => {
  return (
    <div>
      <p className="error">{text}</p>
    </div>
  );
};

export default Error;
