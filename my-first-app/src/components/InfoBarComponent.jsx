import React from "react";

const InfoBarComponent = ({ shoppingCart }) => {
  return (
    <div className="bg-white py-4">
      <p>Items in the shopping cart: {shoppingCart.length}</p>
    </div>
  );
};

export default InfoBarComponent;
