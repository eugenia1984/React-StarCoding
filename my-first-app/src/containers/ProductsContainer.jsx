import React, { useContext, useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import InfoBarComponent from "../components/InfoBarComponent";
import { EcommerceContext } from "../context/EcommerceContext";

const ProductsContainer = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const { products } = useContext(EcommerceContext);

  useEffect(() => {
    return () =>
      console.info("Se esta por morir el componente ProductsContainer");
  }, []);

  const addToShoppingCart = (event, product) => {
    shoppingCart.push(product);
    setShoppingCart([...shoppingCart]);
  };

  return (
    <div className="container">
      <InfoBarComponent shoppingCart={shoppingCart} />
      <div className="row">
        {products.length === 0 ? (
          <p>Cargando los productos...</p>
        ) : (
          products.map((element) => {
            return (
              <CardComponent
                key={element.id}
                product={element}
                addToShoppingCart={addToShoppingCart}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default ProductsContainer;
