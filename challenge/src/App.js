import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "./containers/home/HomeContainer";
import ListContainer from "./containers/list/ListContainer";
import DetailContainer from "./containers/detail/DetailContainer";
import ErrorPage from "./containers/error/ErrorPage";
import { CartProvider } from "./context/Cart.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/list" element={<ListContainer />} />
          <Route path="/product/:id" element={<DetailContainer />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
