import { useState } from "react";
import CardComponent from "../components/CardComponent";

const ProductsContainer = () => {
  let text = `Some quick example text to build on the card title and make up the bulk of the card's content.`;

  const [shoppingCart, setShoppingCart] = useState([]);

  const addToShoppingCart = (event, name) => {
    shoppingCart.push(name);
    setShoppingCart([...shoppingCart]);
  };

  return (
    <div className="container">
      <p>Items in the shopping cart: {shoppingCart.length}</p>
      <div className="row">
        <CardComponent
          title="Producto 1"
          src="https://picsum.photos/100/100/?grayscale&random=1"
          text={text}
          addToShoppingCart={addToShoppingCart}
        />
        <CardComponent
          title="Producto 2"
          src="https://picsum.photos/100/100/?grayscale&random=2"
          text={text}
          addToShoppingCart={addToShoppingCart}
        />
        <CardComponent
          title="Producto 3"
          src="https://picsum.photos/100/100/?grayscale&random=3"
          text={text}
          addToShoppingCart={addToShoppingCart}
        />
      </div>
    </div>
  );
};

export default ProductsContainer;
