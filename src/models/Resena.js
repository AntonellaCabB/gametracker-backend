const mongoose = require('mongoose');

const ResenaSchema = new mongoose.Schema({
  juegoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Juego',
    required: [true, "El ID del juego es obligatorio"]
  },

  puntuacion: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, "La puntuación es obligatoria"]
  },

  textoReseña: {
    type: String,
    required: [true, "La reseña debe tener contenido"]
  },

  horasJugadas: {
    type: Number,
    required: [true, "Debes registrar las horas jugadas"]
  },

  dificultad: {
    type: String,
    enum: ["Fácil", "Normal", "Difícil"],
    required: [true, "Debes seleccionar la dificultad"]
  },

  recomendaria: {
    type: Boolean,
    required: [true, "Debes indicar si recomendarías el juego"]
  },

  fechaCreacion: {
    type: Date,
    default: Date.now
  },

  fechaActualizacion: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Resena', ResenaSchema);
