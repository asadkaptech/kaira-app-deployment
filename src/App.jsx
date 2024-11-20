import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Toaster } from "react-hot-toast";
import Products from "./components/Products";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
        <Toaster position="top-center" reverseOrder={false} />
      </BrowserRouter>
    </>
  );
};

export default App;
