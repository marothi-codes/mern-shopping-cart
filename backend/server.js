require("dotenv").config();
const express = require("express");
const connectDb = require("./config/db");
const productRoutes = require("./routes/productRoutes");

// Connect to the database.
connectDb();

const app = express();
const PORT = process.env.PORT || 3300;

// Middleware configuration.
app.use(express.json());

// Routes.
app.use("/api/products", productRoutes);

app.listen(PORT, () => console.info(`Web app has started and is running on Port: ${PORT}.`));
