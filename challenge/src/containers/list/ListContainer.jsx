import React, { lazy, Suspense, useContext } from "react";
import { LIST } from "../../international";
import Title from "../../components/title/Title";
import { CartContext } from "../../context/Cart";
import CardProduct from "../../components/card/CardProducts";
import "./style.css";

const CardProducts = lazy(() => {import("../../components/card/CardProducts.jsx")})

const ListContainer = () => {
  const { listProducts } = useContext(CartContext);
  console.log("Lista de productos que viene del context", listProducts);

  return (
    <div className="container">
      <Title text={LIST.title} />
      <section className="product-list">
        {listProducts.map((element, index) => {
          return (
            <Suspense fallback={<div>Cargando...</div>} key={index}>
              <CardProduct index={index} element={element} />
            </Suspense>
          );
        })}
      </section>
    </div>
  );
};

export default ListContainer;
