const Resena = require('../models/Resena');
const Juego = require('../models/Juego');

exports.getAll = async (req, res) => {
  try {
    const filtro = {};
    if (req.query.juego) filtro.juego = req.query.juego;
    const resenas = await Resena.find(filtro).sort({ fecha: -1 }).populate('juego', 'titulo');
    res.json(resenas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { juego: juegoId } = req.body;
    const juego = await Juego.findById(juegoId);
    if (!juego) return res.status(400).json({ error: 'Juego no válido' });

    const resena = new Resena(req.body);
    await resena.save();
    res.status(201).json(resena);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const resena = await Resena.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!resena) return res.status(404).json({ error: 'Reseña no encontrada' });
    res.json(resena);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const resena = await Resena.findByIdAndDelete(req.params.id);
    if (!resena) return res.status(404).json({ error: 'Reseña no encontrada' });
    res.json({ message: 'Reseña eliminada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};