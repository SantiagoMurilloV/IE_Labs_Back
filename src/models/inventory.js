const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  category: { type: String },  // Opcional
  value: { type: String },     // Opcional
  reference: { type: String }, // Opcional, sin restricción de unicidad
  quantity: { type: Number },  // Opcional
  brand: { type: String },     // Opcional
  model: { type: String },     // Opcional
  inventory_plate: { type: String },  // Opcional
  createdAt: { type: Date, default: Date.now },  // Fecha automática
  updatedAt: { type: Date, default: Date.now }   // Fecha automática
});

module.exports = mongoose.model('Inventory', inventorySchema);
