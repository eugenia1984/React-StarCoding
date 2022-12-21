import React, { useContext, useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import InfoBarComponent from "../components/InfoBarComponent";
import Loader from "../components/Loader";
import { EcommerceContext } from "../context/EcommerceContext";
import { PRODUCTS } from "../international";

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
        {products.length === 0 ? 
        (
          <Loader text={PRODUCTS.loading} />
        ) : 
        (
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
