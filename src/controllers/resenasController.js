const Resena = require('../models/Resena');
const Juego = require('../models/Juego');

// Obtener todas las reseñas
exports.getAll = async (req, res) => {
  try {
    const resenas = await Resena.find()
      .sort({ fechaCreacion: -1 })
      .populate('juegoId', 'titulo');
    res.json(resenas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener reseñas por juego
exports.getByJuego = async (req, res) => {
  try {
    const { juegoId } = req.params;

    const resenas = await Resena.find({ juegoId })
      .sort({ fechaCreacion: -1 })
      .populate('juegoId', 'titulo');

    res.json(resenas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear reseña
exports.create = async (req, res) => {
  try {
    const {
      juegoId,
      puntuacion,
      textoReseña,
      horasJugadas,
      dificultad,
      recomendaria
    } = req.body;

    // Validación básica
    if (
      !juegoId ||
      !puntuacion ||
      !textoReseña ||
      horasJugadas === undefined ||
      !dificultad ||
      recomendaria === undefined
    ) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    // Verificar si el juego existe
    const juego = await Juego.findById(juegoId);
    if (!juego) {
      return res.status(404).json({ error: "Juego no encontrado" });
    }

    // Crear reseña
    const nuevaResena = new Resena({
      juegoId,
      puntuacion,
      textoReseña,
      horasJugadas,
      dificultad,
      recomendaria
    });

    await nuevaResena.save();
    res.status(201).json(nuevaResena);

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Actualizar reseña
exports.update = async (req, res) => {
  try {
    const data = { 
      ...req.body, 
      fechaActualizacion: Date.now() 
    };

    const resena = await Resena.findByIdAndUpdate(
      req.params.id,
      data,
      { new: true }
    );

    if (!resena) {
      return res.status(404).json({ error: "Reseña no encontrada" });
    }

    res.json(resena);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar reseña
exports.remove = async (req, res) => {
  try {
    const resena = await Resena.findByIdAndDelete(req.params.id);
    if (!resena) return res.status(404).json({ error: 'Reseña no encontrada' });

    res.json({ message: 'Reseña eliminada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
