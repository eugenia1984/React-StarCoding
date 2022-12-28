import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import LinkButton from "../../components/linkButton/LinkButton";
import ProductDescription from "../../components/product/ProductDescription";
import Title from "../../components/title/Title";
import { CartContext } from "../../context/Cart";
import { DETAIL } from "../../international";
import "./style.css";

const DetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { listProducts } = useContext(CartContext);

  useEffect(() => {
    let result = listProducts.filter((element) => element.id === Number(id));
    setProduct(result[0]);
  }, []);

  return (
    <div className="detail-product">
      <LinkButton to="/list" txt={DETAIL.btnBack} />
      <Title text={product.name} />
      <ProductDescription product={product} />
    </div>
  );
};

export default DetailContainer;
