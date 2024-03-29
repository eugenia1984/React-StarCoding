import React from "react";
import { useDispatch } from "react-redux";
import { CARD } from "../../international";
import { addElementToCart } from "../../redux/actions/cart";
import "./Card.css";

const CardComponent = ({ product, addToShoppingCart }) => {
  const dispatch = useDispatch();
  return (
    <div className="card col-sm-6 col-md-4 col-lg-3 shopping-card">
      <img
        src={product.thumbnail}
        className="card-img-top card-image"
        alt={CARD.imgAlt}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">
          <strong>
            {" "}
            {CARD.price} {product.price}
          </strong>
        </p>
        <button
          className="btn btn-dark"
          onClick={(event) => {
            addToShoppingCart(event, product);
            dispatch(addElementToCart(product));
          }}
        >
          {CARD.btnText}
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
