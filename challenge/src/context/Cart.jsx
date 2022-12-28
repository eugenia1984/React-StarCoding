import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const list = [
    { id: 1, name: "Shoes", price: 3000, description: "" },
    { id: 2, name: "Shirt", price: 2600, description: "De algodón" },
    { id: 3, name: "T-shirt", price: 1900, description: "" },
    { id: 4, name: "Short", price: 2900, description: "De gabardina," },
    { id: 5, name: "Hat", price: 900, description: "" },
    { id: 6, name: "Sunglasses", price: 1600, description: "Con filtro UV" },
  ];

  const [listProducts, setListProducts] = useState(list);

  return (
    <CartContext.Provider value={{ listProducts }}>
      {" "}
      {children}
    </CartContext.Provider>
  );
};
