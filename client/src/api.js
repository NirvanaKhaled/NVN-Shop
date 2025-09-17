//const API_URL = "http://localhost:5050";
const API_URL = import.meta.env.VITE_API_URL;

export async function getProducts() {
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}

export async function addProduct(product) {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!response.ok) {
    throw new Error("Failed to add product");
  }
  return response.json();
}
