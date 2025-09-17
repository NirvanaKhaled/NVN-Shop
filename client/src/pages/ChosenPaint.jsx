// Product.jsx
import "./Home.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import React from "react";
import { useLocation } from "react-router-dom";

function ChosenPaint() {
  const location = useLocation();
  const { product } = location.state || {}; // get product from navigate state

  if (!product) return <p>No product selected.</p>;

  const handleAddToCart = () => {
    const userId = localStorage.getItem("guestId"); // or actual user ID if logged in
    //console.log("Added to cart:", product.name, "by user:", userId);
    // Get existing cart for this user from localStorage
    let userCart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];

    // Add product name to the cart list
    userCart.push(product.name);

    // Save updated cart back to localStorage
    localStorage.setItem(`cart_${userId}`, JSON.stringify(userCart));

    console.log("Added to cart:", product.name, "by user:", userId);
    console.log("Current cart:", userCart);
  
    // Later: you can send this to the backend or add to a cart state
  };  

  return (
    <div className="container">
      <Header title={product.name} />
      <Sidebar />

      <main className="main">
        <div className="chosen-paint">
          <img src={product.image} alt={product.name} width="300" />
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <button onClick={handleAddToCart} className="add-to-cart-btn">
            Add to Cart 🛒
          </button>
        </div>
      </main>
    </div>
  );
}

export default ChosenPaint;
