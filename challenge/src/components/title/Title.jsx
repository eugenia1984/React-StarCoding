import React from "react";
import "./style.css";

const Title = ({ text }) => {
  return (
    <>
      <h1 className="headline">{text}</h1>
    </>
  );
};

export default Title;
