import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const list = [
    { id: 1, name: "Shoes", price: 3000 },
    { id: 2, name: "Shirt", price: 2600 },
    { id: 3, name: "T-shirt", price: 1900 },
  ];

  const [listProducts, setListProducts] = useState(list);

  return (
    <CartContext.Provider value={{ listProducts }}>
      {" "}
      {children}
    </CartContext.Provider>
  );
};
