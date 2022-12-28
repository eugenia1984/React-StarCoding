import React from "react";
import { DETAIL } from "../../international";
import "./style.css";

const ProductDescription = ({ product}) => {
  return(
    <div className="product-description">
        <p>
          <strong>
            {product.description === ""
              ? DETAIL.description
              : product.description}
          </strong>
        </p>
        <p>
          {DETAIL.price} {product.price}
        </p>
        <button className="btn-cta">{DETAIL.btnText}</button>
      </div>
  );
}

export default ProductDescription;