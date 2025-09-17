// Gallery.jsx
import "./Home.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { getProducts } from "../api";

function Gallery() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // hook to navigate programmatically


  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

 
  const handleViewClick = (product) => {
    console.log("View button clicked for:", product.name);
    navigate("/ChosenPaint", { state: { product } });
   
  };


  return (
    <div className="container">
      <Header title="Gallery 🎨" />
      <Sidebar />

      <main className="main">
        <ul className="product-list">
          {products.map((p) => (
            <li key={p._id} className="product-item">
              <img src={p.image} alt={p.name} width="100" />
              <p>{p.name} - ${p.price}</p>
              <button 
                className="view-button" 
                onClick={() => handleViewClick(p)}
              >
                View
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Gallery;
