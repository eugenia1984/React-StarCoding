import React from "react";
import Navbar from "../navbar/Navbar";
import "./style.css";

const InfoBarComponent = ({ shoppingCart, text }) => {
  return (
    <div className="bg-white">
      <Navbar />
      <p className="my-4">
        {text} {shoppingCart.length}
      </p>
      <ul>
        {shoppingCart.map((element, index) => (
          <li key={index}>
            {index + 1} - {element.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoBarComponent;
