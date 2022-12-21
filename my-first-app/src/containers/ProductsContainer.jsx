import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import InfoBarComponent from "../components/InfoBarComponent";
import Loader from "../components/Loader";
import { EcommerceContext } from "../context/EcommerceContext";

import { PRODUCTS } from "../international";
import { INFO_BAR } from "../international";

const ProductsContainer = () => {
  const { products, shoppingCart, setShoppingCart, fetchData } =
    useContext(EcommerceContext);
  const { search } = useParams();

  useEffect(() => {
    fetchData(search).catch(console.error);
    return () => {};
  }, [search]);

  const addToShoppingCart = (event, product) => {
    shoppingCart.push(product);
    setShoppingCart([...shoppingCart]);
  };

  return (
    <div className="container">
      <InfoBarComponent shoppingCart={shoppingCart} text={INFO_BAR.text} />
      <div className="row">
        {products.length === 0 ? (
          <Loader text={PRODUCTS.loading} />
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
