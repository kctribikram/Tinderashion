// backend/models/items.models.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: [String], required: true },
  color: { type: [String], required: true },
  image: { type: String, required: true }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
