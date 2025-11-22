const express = require('express');
const router = express.Router();
const resenasCtrl = require('../controllers/resenasController');

router.get('/', resenasCtrl.getAll);
router.get('/juego/:juegoId', resenasCtrl.getByJuego);
router.post('/', resenasCtrl.create);
router.put('/:id', resenasCtrl.update);
router.delete('/:id', resenasCtrl.remove);

module.exports = router;
