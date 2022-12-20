import React, { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import InfoBarComponent from "../components/InfoBarComponent";

const ProductsContainer = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect( async () => {
    // para cuando se esta por montar el componente
    // llamada a una APi que nos trae el JSON
    const data = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=zapatillas");
    const response = await data.json();
    
    setProducts(response.results);

    return () => {
      // se esta por morir el componente
      console.log("Se esta por morir el componente");
    };
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
