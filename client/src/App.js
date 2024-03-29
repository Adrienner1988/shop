import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from './scenes/home/Home'
import Checkout from "./scenes/checkout/Checkout";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import Conformation from "./scenes/checkout/Conformation";
import Navbar from "./scenes/global/Navbar";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() =>{
    window.scrollTo(0, 0);
  }, [pathname])

  return null;
}

function App() {
  return (
    <div className="app">
      <Navbar/>
      <BrowserRouter>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:itemId" element={<ItemDetails />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/checkout/success" element={<Conformation />} />
      </Routes>
      </BrowserRouter>
    </div>   
  );  
}

export default App;
