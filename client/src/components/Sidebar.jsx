import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside
      style={{
        width: "100px",
        height: "100vh",
        backgroundColor: "#333",
        color: "white",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        position: "fixed",
        top: "60px",   // 👈 moves the sidebar down
        left: 0,
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>NVN Shop 🎨</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/gallery" style={{ color: "white", textDecoration: "none" }}>
          Gallery
        </Link>
        <Link to="/product" style={{ color: "white", textDecoration: "none" }}>
          Product
        </Link>
        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
          Cart
        </Link>
        <Link to="/checkout" style={{ color: "white", textDecoration: "none" }}>
          Checkout
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
