import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Header/nav";
import Home from "./components/Pages/home";
import Bottles from "./components/Pages/bottle";
import About from "./components/Pages/about";
import Product from "./components/Pages/products";
import Contact from "./components/Pages/contacts";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/bottles" element={<Bottles />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
