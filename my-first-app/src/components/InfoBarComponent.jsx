import React from "react";
import Navbar from "./navbar/Navbar";

const InfoBarComponent = ({ shoppingCart, text }) => {
  return (
    <div className="bg-white">
      <Navbar />
      <p className="my-4">
        {text} {shoppingCart.length}
      </p>
    </div>
  );
};

export default InfoBarComponent;
