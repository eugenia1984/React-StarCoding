import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Title from "../../components/title/Title";
import { CartContext } from "../../context/Cart";
import { DETAIL } from "../../international";
import "./style.css";

const DetailContainer = () => {
  const [ product, setProduct ] = useState({});
  const { id } = useParams();
  const { listProducts } = useContext(CartContext);
  
  useEffect(() => {
    let result = listProducts.filter((element) => element.id === Number(id));
    setProduct(result[0])
  }, []);

  return (
    <div className="detail-product">
      <Title text={product.name} />
      <div className="product-description">
        <p><strong>{DETAIL.description}</strong></p>
        <p>{DETAIL.price} {product.price}</p>
        <button className="btn-cta">{DETAIL.btnText}</button>
      </div>
    </div>
  );
};

export default DetailContainer;
