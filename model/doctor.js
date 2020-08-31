// import mongoose 
const mongoose = require('mongoose');

// crete doctor schema 
const docSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

// call the doctor schema
const Doctor = mongoose.model('Doctor', docSchema);

// export the doctor 
module.exports = Doctor;