const mongoose = require('mongoose');

// create report schema
const rSchema = new mongoose.Schema({
    doctorname:{
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    patientname: {
        type: String,
        required: true
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    }

},{
    timestamps: true
});

const Report = mongoose.model('Report', rSchema);

// export report
module.exports = Report;