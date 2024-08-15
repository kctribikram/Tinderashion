// server/routes/products.js

const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');

router.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find(req.query);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
