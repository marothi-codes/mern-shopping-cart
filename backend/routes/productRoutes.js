const express = require("express");
const {
    getAllProducts, getProductById
} = require("../controller/productController");

const router = express.Router();

// @desc    Retrieve and return all product items from the database.
// @route   GET: /api/products
// @access  Anonymous
router.get("/", getAllProducts);

// @desc    Retrieve and return a product item from the database.
// @route   GET: /api/products/:id
// @access  Anonymous
router.get("/:id", getProductById);

module.exports = router;
