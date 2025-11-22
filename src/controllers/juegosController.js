const Juego = require('../models/Juego');

// Obtener todos los juegos
exports.getAll = async (req, res) => {
  try {
    const juegos = await Juego.find().sort({ fechaCreacion: -1 });
    res.json(juegos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener un juego por ID
exports.getById = async (req, res) => {
  try {
    const juego = await Juego.findById(req.params.id);
    if (!juego) return res.status(404).json({ error: 'Juego no encontrado' });
    res.json(juego);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear juego
exports.create = async (req, res) => {
  try {
    const {
      titulo,
      genero,
      plataforma,
      añoLanzamiento,
      desarrollador,
      imagenPortada,
      descripcion,
      completado
    } = req.body;

    // Validación básica
    if (
      !titulo ||
      !genero ||
      !plataforma ||
      !añoLanzamiento ||
      !desarrollador ||
      !imagenPortada ||
      !descripcion
    ) {
      return res.status(400).json({ error: "Todos los campos obligatorios deben llenarse." });
    }

    const juego = new Juego({
      titulo,
      genero,
      plataforma,
      añoLanzamiento,
      desarrollador,
      imagenPortada,
      descripcion,
      completado: completado || false
    });

    await juego.save();
    res.status(201).json(juego);

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Actualizar juego
exports.update = async (req, res) => {
  try {
    const juego = await Juego.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!juego) return res.status(404).json({ error: 'Juego no encontrado' });

    res.json(juego);

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar juego
exports.remove = async (req, res) => {
  try {
    const juego = await Juego.findByIdAndDelete(req.params.id);
    if (!juego) return res.status(404).json({ error: 'Juego no encontrado' });
    res.json({ message: 'Juego eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
