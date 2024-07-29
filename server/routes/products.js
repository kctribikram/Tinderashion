const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');

router.get('/api/products', async (req, res) => {
  const { category } = req.query;
  let query = {};
  if (category) {
    query.category = category;
  }

  try {
    const products = await Product.find(query);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
