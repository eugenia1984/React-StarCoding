import React from "react";
import { Link } from "react-router-dom";
import { LIST } from "../../international";
import "./style.css";

const CardProducts = ({  element }) => {
  return (
    <div className="product-card">
      <p>
        <strong>{element.name}</strong>
      </p>
      <p>
        Precio: <a href="/"> $ {element.price}</a>
      </p>
      <Link
        to={`/product/${element.id}`}
        className="cta-link"
        alt={element.name}
      >
        {LIST.text}
      </Link>
    </div>
  );
};

export default CardProducts;
