import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Products from "./pages/products";
import HorizonPage from "./pages/HorizonPage";
import ContactUs from "./pages/contactUs";
import Nav from "./components/nav";
import Computer from "./pages/lapTop";
import Storage from "./store";
import { useState } from 'react';
import Modal from "./components/modal";

function App() {
  return (
    <Storage>
    
    <BrowserRouter>
    
    <Nav />
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/comp" element={<Computer />} />
        <Route path="/products" element={<Products />} />
        <Route path="/HorizonPage" element={<HorizonPage />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
    </Storage>
  );
  
}

export default App;
