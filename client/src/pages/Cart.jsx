import "./Home.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import { getProducts } from "../api"; // function to fetch all products

function Cart() {
  const [cartItems, setCartItems] = useState([]); // names stored in cart
  const [products, setProducts] = useState([]); // full product list
  const [cartProducts, setCartProducts] = useState([]); // matched product objects

  useEffect(() => {
    const guestId = localStorage.getItem("guestId");
    if (guestId) {
      const storedCart = JSON.parse(localStorage.getItem(`cart_${guestId}`)) || [];
      const filteredCart = storedCart.filter(item => item !== null);
      setCartItems(filteredCart);
    }

    // Fetch all products from backend
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, []);

  // Whenever cartItems or products change, find matching product objects
  useEffect(() => {
    const matchedProducts = cartItems
      .map(name => products.find(p => p.name === name))
      .filter(p => p !== undefined); // remove undefined if not found
    setCartProducts(matchedProducts);
  }, [cartItems, products]);

  return (
    <div className="container">
      <Header title="Shopping Cart 🛒" />
      <Sidebar />

      <main className="main">
        <h2>Your Cart Items</h2>
        {cartProducts.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartProducts.map(product => (
              <li key={product._id}>
                <img src={product.image} alt={product.name} width="100" />
                <p>{product.name} - ${product.price}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default Cart;
