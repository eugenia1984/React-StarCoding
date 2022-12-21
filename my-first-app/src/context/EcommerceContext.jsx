import { createContext, useState } from "react";

export const EcommerceContext = createContext();

export const EcommerceProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchData = async (searchQuery) => {
    const data = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}`);
    const result = await data.json();
    setProducts(result.results);
  };

  return (
    <EcommerceContext.Provider
      value={{ products, shoppingCart, setShoppingCart, fetchData }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};
