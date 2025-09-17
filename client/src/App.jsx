// App.jsx
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ChosenPaint from "./pages/ChosenPaint";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import React, { useEffect } from "react"; // <-- make sure you import useEffect

function App() {

  useEffect(() => {
    // Check if guest ID exists, if not create one
    let guestId = localStorage.getItem("guestId");
    console.log("Your temp user id: ", guestId);
    if (!guestId) {
      guestId = crypto.randomUUID();
      localStorage.setItem("guestId", guestId);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/ChosenPaint" element={<ChosenPaint />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;


