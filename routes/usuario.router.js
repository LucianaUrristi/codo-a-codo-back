const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');


//el prefijo /usuario

// const usuario =[
//     {
//         id: 1,
//         nombre: 'Juan',
//         apellido: 'Perez',
//         email: 'juanperez@demonslayer.com',
//         turno: 'mañana',
//         edad: '25-30',
//         fanArt: true

//     },
//     {
//         id: 2,
//         nombre: 'Pedro',
//         apellido: 'Gomez',
//         email: 'pedrogomez@demonslayer.com',
//         turno: 'tarde',
//         edad: '30+',
//         fanArt: false
//     },
//     {
//         id: 3,
//         nombre: 'Maria',
//         apellido: 'Gonzalez',
//         email: 'mariagonzalez@demonslayer.com',
//         turno: 'noche',
//         edad: '20-25',
//         fanArt: true
//     }
// ]

router.get('/', usuarioController.index);
router.get('/:id', usuarioController.show);
router.post('/', usuarioController.usuarios);
router.put('/:id', usuarioController.update);


module.exports = router;