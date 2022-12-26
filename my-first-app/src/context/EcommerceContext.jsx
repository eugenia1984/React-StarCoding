import React from "react";
import { createContext, useState } from "react";

export const EcommerceContext = createContext();

export const EcommerceProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (searchQuery) => {
    try {
      const data = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}`
      );
      const result = await data.json();
      setProducts(result.results);
    } catch (error) {
      setError("Ocurrió un error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <EcommerceContext.Provider
      value={{
        products,
        shoppingCart,
        loading,
        setShoppingCart,
        setProducts,
        fetchData,
        setLoading,
        error,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};
