import { useDispatch } from "react-redux";
import { addElementToCart } from "../../redux/actions/cart";
import { BTN_ADD_PRODUCT } from "../../international";
import "./style.css";

const ButtonAddToCart = () => {
  const dispatch = useDispatch();

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
}

export default ButtonAddToCart;