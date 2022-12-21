import React, { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import InfoBarComponent from "../components/InfoBarComponent";

const ProductsContainer = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [products, setProducts] = useState([]);

  // para cuando se esta por montar el componente
  useEffect(() => {
    
    const fetchData = async () => {
      // llamada a una APi que nos trae el JSON
      const data = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=zapatillas"
      );
      // la paso a JSON
      const json = await data.json();
  
      setProducts(json.results);
    }

    fetchData()
      .catch(console.error);
    
     // return para cerrar el llamado a la API 
    return () => console.log("Se esta por morir el componente");
  }, []);

  const addToShoppingCart = (event, product) => {
    shoppingCart.push(product);
    setShoppingCart([...shoppingCart]);
  };

  return (
    <div className="container">
      <InfoBarComponent shoppingCart={shoppingCart} />
      <div className="row">
        {products.map((element) => {
          return (
            <CardComponent
              key={element.id}
              product={element}
              addToShoppingCart={addToShoppingCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsContainer;
