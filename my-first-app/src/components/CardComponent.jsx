import React from "react";

const CardComponent = ({ product, addToShoppingCart }) => {
  return (
    <div className="card col-4 shopping-card">
      <img src={product.thumbnail} className="card-img-top" alt="some random product" />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.price}</p>
        <button
          className="btn btn-primary"
          onClick={(event) => {
            addToShoppingCart(event, product );
          }}
        >
          Add to Shopping Cart
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
