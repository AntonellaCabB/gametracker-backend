const mongoose = require('mongoose');

const ResenaSchema = new mongoose.Schema({
  juego: { type: mongoose.Schema.Types.ObjectId, ref: 'Juego', required: true },
  autor: { type: String, default: 'Anónimo' },
  texto: { type: String, required: true },
  rating: { type: Number, min: 0, max: 5 },
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resena', ResenaSchema);
