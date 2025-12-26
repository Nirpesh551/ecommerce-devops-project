const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('E-Commerce Backend API is running!');
});

// Routes (we'll create these files next)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));

// MongoDB connection
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce')
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log('MongoDB connected successfully');
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
