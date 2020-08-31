// import mongoose 
const mongoose = require('mongoose');

// create database for doctor patient and report
mongoose.connect('mongodb://localhost/hospital_api',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// for established the database connection
const db = mongoose.connection;

// if any error then show the error
db.on('error', console.error.bind(console,'error in connecting to db'));

// callback function
db.once('open', function(){
    console.log('Connecting to Database :: MongoDB');
})

// expors the database
module.exports = db;