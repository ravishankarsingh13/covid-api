const mongoose = require('mongoose');

// create patient schema
const pSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    report:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Report'
    }]
}, {
    timestamps: true
});

const Patient = mongoose.model('Patient', pSchema);

// export patient
module.exports = Patient;