const express = require('express');
const router = express.Router();

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");   
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});


const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    console.log(file);
    const fileTypes = /jpg|jpeg|png/;

    const mimeType = fileTypes.test(file.mimeType);

    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase());
    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Tipo de archivo no soportado");
  },
  limits: { fileSize: 1024 * 1024 * 1 },
});

const usuarioController = require('../controllers/usuario.controller');


//el prefijo /usuario

router.get('/', usuarioController.index);
router.get('/:id', usuarioController.show);
router.post('/', upload.single("imagen"), usuarioController.usuarios);
router.put('/:id', usuarioController.update);
router.delete('/:id', usuarioController.destroy);

module.exports = router;