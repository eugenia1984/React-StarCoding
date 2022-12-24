import React from "react";
import Navbar from "./navbar/Navbar";

const InfoBarComponent = ({ shoppingCart, text, handleKeyUp }) => {
  return (
    <div className="bg-white py-4">
      <Navbar />
      <div className="my-4">
        <input
          type="text"
          onInput={handleKeyUp}
          placeholder="Search by name..."
        />
      </div>
      <p>
        {text} {shoppingCart.length}
      </p>
    </div>
  );
};

export default InfoBarComponent;
