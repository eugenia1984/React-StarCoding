import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addElementToCart } from "../../redux/actions/cart";
import { BTN_ADD_PRODUCT, PRODUCTS } from "../../international";
import "./style.css";
import { EcommerceContext } from "../../context/EcommerceContext";

const ButtonAddToCart = () => {
  const dispatch = useDispatch();
  const TOTAL = useSelector((state) => state.cartReducer);

  return (
    <div className="my-5 btn-add-product mx-3">
      <button
        onClick={() => {
          dispatch(addElementToCart({ id: 1, name: "shirt", price: 3000 }));
        }}
      >
      {BTN_ADD_PRODUCT.text}
      </button>
    </div>
  );
};

export default ButtonAddToCart;
