import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductsContainer from "./containers/ProductsContainer";
import { EcommerceProvider } from "./context/EcommerceContext";

function App() {
  return (
    <div className="App my-5 mx-2">
      <Routes>
        <EcommerceProvider>
          <Route path="/" element={<ProductsContainer />} />
        </EcommerceProvider>
      </Routes>
    </div>
  );
}

export default App;
