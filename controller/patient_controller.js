// import patient model
const Patient = require('../model/patient');
// import report model
const Report = require('../model/report');

// method to register patient using doctor token
module.exports.register = async function(req,res){
    try {
        let newpatient = await Patient.findOne({phone: req.body.phone});

        if(!newpatient){
            let newpatient = await Patient.create(req.body);
            return res.json(200, {
                message: "Patient registered successful and create report"
            })
        }else{
            return res.json(409, {
                message: "User already exist please create report"
            })
        }
        
    } catch (err) {
        return res.json(500, {
            message: "Internal server error"
        })
    }
}

// method to create report by the doctor 
module.exports.create_report = async function(req, res){
    let pid = req.params.id;
    try {
        let patient = await Patient.findOne({ phone: pid});
        if(!patient){
            return res.json(422,{
                message: "report can't be created"
            })
        }else{
            let report = await Report.create({
                doctorname : req.user.name,
                status: req.body.status,
                patientname: patient.name
            });
            patient.report.push(report);
            patient.save();
            return res.json(200,{
                message: "Report created successful"
            })
        }


    } catch (err) {
        console.log(err);
        return res.json(500, {
            message: "internal server error"
        })
        
    }
}

// method to show all report for each patient
module.exports.allreports = async function(req, res){
    let pid = req.params.id;
    try {
        let patient = await Patient.findOne({ phone: pid });
        if(!patient || patient.report.length == 0){
            return res.json(200, {
                message: " Any report not created yet"
            })
        }
        const allreports = [];
        for(let i=0;i<patient.report.length;i++){
            let oneReport = await Report.findById(patient.report[i]);
            allreports.push({
                "Doctor Name": oneReport.doctorname,
                "status": oneReport.status
            })
        }
        return res.status(200).json(allreports);
    } catch (err) {
        return res.json(500, {
            message: "Internal server error"
        })
    }
}
