import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ButtonAddToCart from "./components/button/ButtonAddToCart";
import Footer from "./components/footer/Footer";
import RegisterContainer from "./containers/form/RegisterContainer";
import HomeContainer from "./containers/home/HomeContainer";
import ProductsContainer from "./containers/products/ProductsContainer";
import { EcommerceProvider } from "./context/EcommerceContext";

function App() {
  const STATE = useSelector((state) => state.cartReducer);
  console.log(STATE);

  return (
    <div className="App mt-3">
      <ButtonAddToCart />
      <EcommerceProvider>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/productos" element={<ProductsContainer />} />
          <Route path="/productos/:busqueda" element={<ProductsContainer />} />
          <Route path="/registro" element={<RegisterContainer />} />
        </Routes>
      </EcommerceProvider>
      <Footer />
    </div>
  );
}

export default App;
