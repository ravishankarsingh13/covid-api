// import express
const express = require('express');
// create router
const router = express.Router();

// import homecontroller
const homeController = require('../controller/home_controller');

router.get('/', homeController.home);
// create route to doctors
router.use('/doctors', require('./doctors'));

// create route to patient
router.use('/patients', require('./patients'));
// create route to report
router.use('/reports', require('./reports'));

// import router
module.exports = router;