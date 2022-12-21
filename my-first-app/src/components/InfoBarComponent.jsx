import React from "react";

const InfoBarComponent = ({ shoppingCart, text }) => {
  return (
    <div className="bg-white py-4">
      <p>
        {text} {shoppingCart.length}
      </p>
    </div>
  );
};

export default InfoBarComponent;
