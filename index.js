// import express
const express = require('express');
// define path
const port = 8000;
// create express app
const app = express();

// import mongoose 
const db = require('./config/mongoose');
// import passport jwt strategy
const passportJWT = require('./config/passport-jwt-strategy');

// middleware
app.use(express.urlencoded({extended:true}));
// import router
app.use('/',require('./routes'));

// running the server
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server ${err}`);
    }
    console.log(`Yup! Server is running on the port: ${port}`);
})