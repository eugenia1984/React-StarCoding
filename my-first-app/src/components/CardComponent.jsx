import React from "react";
import { CARD } from "../international";

const CardComponent = ({ product, addToShoppingCart }) => {
  return (
    <div className="card col-sm-6 col-md-4 col-lg-3 shopping-card">
      <img src={product.thumbnail} className="card-img-top" alt={CARD.imgAlt} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">
          <strong>
            {" "}
            {CARD.price} {product.price}
          </strong>
        </p>
        <button
          className="btn btn-primary"
          onClick={(event) => {
            addToShoppingCart(event, product);
          }}
        >
          {CARD.btnText}
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
