import { createContext, useEffect, useState } from "react";

export const EcommerceContext = createContext();

export const EcommerceProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=zapatillas"
    );
    const result = await data.json();
    setProducts(result.results);
  };

  useEffect(() => {
    fetchData().catch(console.error);
  }, []);

  return (
    <EcommerceContext.Provider value={{ products }}>
      {children}
    </EcommerceContext.Provider>
  );
};
