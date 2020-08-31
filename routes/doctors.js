// import express server
const express = require('express');

// create router
const router = express.Router();
// import doctor controller 
const docController = require('../controller/doctor_controller');

// route to register 
router.get('/register', docController.register);

// route to login
router.post('/login', docController.login);

// export router
module.exports = router;