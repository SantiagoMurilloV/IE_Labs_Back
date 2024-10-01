
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  user_idcart: { type: String, required: true, unique: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true }, 
  email: { type: String, required: true, unique: true }, 
  phone_number: { type: String, required: true }, 
  faculty: { type: String, required: true }, 
  program: { type: String, required: true }, 
  semester: { type: Number, required: true }, 
  user_role: { type: String, required: true }, 
  created_at: { type: Date, default: Date.now }, 
  updated_at: { type: Date, default: Date.now } 
});

module.exports = mongoose.model('users', studentSchema);

