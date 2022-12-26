import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "../../components/card/CardComponent";
import InfoBarComponent from "../../components/InfoBarComponent";
import Loader from "../../components/Loader";
import Search from "../../components/search/Search";
import { EcommerceContext } from "../../context/EcommerceContext";

import { PRODUCTS } from "../../international";
import { INFO_BAR } from "../../international";

const ProductsContainer = () => {
  const [searchTerm, setSearchTerm] = useState();

  const { products, shoppingCart, setShoppingCart, setProducts, fetchData } =
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

  const handleKeyUp = (e) => {
    setSearchTerm(e.target.value);
    const productsFilter = products.filter((element) => {
      if (element.title.toUpperCase().match(e.target.value.toUpperCase())) {
        return true;
      }
      return false;
    });
    setProducts(productsFilter);
  };

  return (
    <div className="container">
      <InfoBarComponent
        shoppingCart={shoppingCart}
        text={INFO_BAR.text}
        handleKeyUp={handleKeyUp}
      />
      <Search handleKeyUp={handleKeyUp} />
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
