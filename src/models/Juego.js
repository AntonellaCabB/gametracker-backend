const mongoose = require('mongoose');

const JuegoSchema = new mongoose.Schema({
  titulo: { 
    type: String, 
    required: [true, "El título es obligatorio"] 
  },

  genero: { 
    type: String, 
    required: [true, "El género es obligatorio"] 
  },

  plataforma: { 
    type: String, 
    required: [true, "La plataforma es obligatoria"] 
  },

  añoLanzamiento: { 
    type: Number, 
    required: [true, "El año de lanzamiento es obligatorio"] 
  },

  desarrollador: { 
    type: String, 
    required: [true, "El desarrollador es obligatorio"] 
  },

  imagenPortada: { 
    type: String,
    required: [true, "La imagen de portada es obligatoria"]
  },

  descripcion: { 
    type: String, 
    required: [true, "La descripción es obligatoria"] 
  },

  completado: { 
    type: Boolean, 
    default: false 
  },

  fechaCreacion: { 
    type: Date, 
    default: Date.now 
  }
});

// Exportar modelo
module.exports = mongoose.model('Juego', JuegoSchema);
