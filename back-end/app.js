// DEPENDENCIES
const express = require("express");
const productsController = require("./controllers/productsController.js")
const cors = require("cors");
// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

//anything that starts with products use productsController file....

app.use("/products", productsController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
