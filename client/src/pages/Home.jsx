// Home.jsx
import "./Home.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Home() {
  return (
    <div className="container">
        <Header title="Home Page 🏠" />
      <Sidebar />

      <main className="main">
       
        <p>Welcome to NVN Shop 🎨 — Explore our collection of art and products!</p>
      </main>
    </div>
  );
}

export default Home;
