const express = require('express');
// create router
const router = express.Router();
// import passport
const passport = require('passport');
// import report controller
const reportController = require('../controller/report_controller');

// route for show the status
router.post('/:status',passport.authenticate('jwt',{session:false}),reportController);

//export router
module.exports = router;