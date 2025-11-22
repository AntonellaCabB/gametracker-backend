const express = require('express');
const router = express.Router();
const juegosCtrl = require('../controllers/juegosController');

router.get('/', juegosCtrl.getAll);
router.get('/:id', juegosCtrl.getById);
router.post('/', juegosCtrl.create);
router.put('/:id', juegosCtrl.update);
router.delete('/:id', juegosCtrl.remove);

module.exports = router;
