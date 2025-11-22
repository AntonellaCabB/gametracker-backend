const mongoose = require('mongoose');

const JuegoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  genero: { type: String },
  plataformas: { type: [String], default: [] },
  horasJugadas: { type: Number, default: 0 },
  completado: { type: Boolean, default: false },
  rating: { type: Number, min: 0, max: 5 },
  imagen: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Juego', JuegoSchema);
