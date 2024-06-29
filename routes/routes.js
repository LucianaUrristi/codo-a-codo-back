const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.getAllUser);
router.get('/:id', controller.getAllUserById);
router.post('/', controller.createUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);


module.exports = router;