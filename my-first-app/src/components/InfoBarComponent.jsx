import React from "react";

const InfoBarComponent = ({ shoppingCart }) => {
  return (
    <div className="bg-white py-4">
      <p>Productos seleccionados: {shoppingCart.length}</p>
    </div>
  );
};

export default InfoBarComponent;
