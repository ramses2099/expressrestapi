const express = require('express');
const router = express.Router();

//import from controller aut
const authController = require('../../controllers/authController');


router.post('/register', authController.register);

module.exports = router;