// Header.jsx
function Header({ title }) {
    return (
      <header
        style={{
          width: "100%",
          height: "60px",
          backgroundColor: "#444",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start", // aligns text to the right
          padding: "0 20px",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        <h1 style={{ fontSize: "1.5rem", margin: 0 }}>{title}</h1>
      </header>
    );
  }
  
  export default Header;
  