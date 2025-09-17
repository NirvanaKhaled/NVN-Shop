import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB error:", err));

// Schema for products (paints)
const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
});
const Product = mongoose.model("Product", productSchema);

// Schema for cart items
const cartSchema = new mongoose.Schema({
  userId: String, // can be guestId or actual user ID
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  name: String,
  image: String,
  price: Number,
  quantity: { type: Number, default: 1 },
});
const Cart = mongoose.model("Cart", cartSchema);

// Example route
app.get("/", (req, res) => {
  res.send("Hello from NVN-Shop backend 🚀");
});

// Get all products
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add a new product
app.post("/products", async (req, res) => {
  console.log("📩 Incoming POST body:", req.body); // Debug
  const { name, image, price } = req.body;
  const product = new Product({ name, image, price });
  await product.save();
  res.json(product);
});

// Get cart items for a specific user
app.get("/cart/:userId", async (req, res) => {
  try {
    const cartItems = await Cart.find({ userId: req.params.userId });
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add an item to the cart
app.post("/cart", async (req, res) => {
  try {
    const { userId, productId, name, image, price } = req.body;
    const existingItem = await Cart.findOne({ userId, productId });
    if (existingItem) {
      existingItem.quantity += 1;
      await existingItem.save();
      return res.json(existingItem);
    }
    const cartItem = new Cart({ userId, productId, name, image, price });
    await cartItem.save();
    res.json(cartItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
