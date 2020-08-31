const express = require('express');
// create router
const router = express.Router();
// import passport
const passport = require('passport'); 

// import patient controller
const patientcontroller = require('../controller/patient_controller');

// route for patient regitration by the doctor
router.post('/register', passport.authenticate('jwt',{session: false}),patientcontroller.register);
// route for create report by the doctor for the registered patient
router.post('/:id/create_report',passport.authenticate('jwt',{session: false}),patientcontroller.create_report);
// route for show the all report for patient
router.post('/:id/all_reports',passport.authenticate('jwt',{session: false}),patientcontroller.allreports);


module.exports = router;