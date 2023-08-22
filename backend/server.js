import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
const port = process.env.PORT;

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((x) => x._id === req.params.id);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
