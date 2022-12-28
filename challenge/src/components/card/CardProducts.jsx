import React from "react";
import { LIST } from "../../international";
import LinkButton from "../linkButton/LinkButton";
import "./style.css";

const CardProducts = ({ element }) => {
  return (
    <div className="product-card">
      <h2>{element.name}</h2>
      <p>
        <strong>Precio:</strong> $ {element.price}
      </p>
      <LinkButton
        to={`/product/${element.id}`}
        txt={LIST.text}
        className="btn-link"
      />
    </div>
  );
};

export default CardProducts;
