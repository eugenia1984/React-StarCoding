import React from "react";
import { INFO_BAR } from "../international";

const InfoBarComponent = ({ shoppingCart }) => {
  return (
    <div className="bg-white py-4">
      <p>
        {INFO_BAR.text} {shoppingCart.length}
      </p>
    </div>
  );
};

export default InfoBarComponent;
