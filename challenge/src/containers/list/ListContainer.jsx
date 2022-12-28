import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LIST } from "../../international";
import Title from "../../components/title/Title";
import { CartContext } from "../../context/Cart";
import "./style.css";

const ListContainer = () => {
  
  const { listProducts } = useContext(CartContext);
  console.log("Lista de productos que viene del context",listProducts)

  return (
    <div className="container">
      <Title text={LIST.title} />
      <section className="product-list">
        {listProducts.map((element, index) => {
          return (
            <div key={index} className="product-card">
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
        })}
      </section>
    </div>
  );
};

export default ListContainer;
