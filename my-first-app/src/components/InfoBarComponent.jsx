import React from "react";
import Navbar from "./navbar/Navbar";

const InfoBarComponent = ({ shoppingCart, text }) => {
  return (
    <div className="bg-white">
      <Navbar />
      <p className="my-4">
        {text} {shoppingCart.length} producto(s) agregados
      </p>
    </div>
  );
};

export default InfoBarComponent;
