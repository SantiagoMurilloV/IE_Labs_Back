const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  day: { type: String, required: true },
  hours: { type: String, required: true },
  academicSpace: { type: String, required: true },
  laboratoryCode: { type: String, required: true },
  numberOfStudents: { type: Number, required: true }
});

module.exports = mongoose.model('Reservation', reservationSchema);