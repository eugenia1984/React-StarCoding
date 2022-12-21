import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomeContainer from "./containers/HomeContainer";
import ProductsContainer from "./containers/ProductsContainer";
import { EcommerceProvider } from "./context/EcommerceContext";

function App() {
  return (
    <div className="App my-5 mx-2">
      <EcommerceProvider>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/productos" element={<ProductsContainer />} />
          <Route path="/productos/:busqueda" element={<ProductsContainer />} />
        </Routes>
      </EcommerceProvider>
    </div>
  );
}

export default App;
