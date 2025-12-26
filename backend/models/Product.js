const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  category: { type: String },
  countInStock: { type: Number, required: true }
});

module.exports = mongoose.model('Product', ProductSchema);
