const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');


//el prefijo /usuario

router.get('/', usuarioController.index);
router.get('/:id', usuarioController.show);
router.post('/', usuarioController.usuarios);
router.put('/:id', usuarioController.update);
router.delete('/:id', usuarioController.destroy);

module.exports = router;