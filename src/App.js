import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./components/Home/Home";
import Products from "./components/Home/Products";
import Product from "./components/Home/Product";
import Header from "./shared/Header/Header";
import Cart from "./components/Home/Cart";

function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
