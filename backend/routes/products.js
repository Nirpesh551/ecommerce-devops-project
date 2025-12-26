const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Add sample product (for testing)
router.post('/seed', async (req, res) => {
  await Product.deleteMany({});
  const sampleProducts = [
    { name: 'Laptop', description: 'High performance', price: 999, countInStock: 10, category: 'Electronics' },
    { name: 'T-Shirt', description: 'Cotton comfort', price: 29, countInStock: 50, category: 'Clothing' }
  ];
  const created = await Product.insertMany(sampleProducts);
  res.json(created);
});

module.exports = router;
