// import report model
const Report = require('../model/report');

// method to show status report of each patient
module.exports = async function(req,res){
    const status = req.params.status;

    try {
        let reports = await Report.find({status: status}).populate('Patient');
        if(reports.length == 0 ){
            return res.json(200, {
                message: "no report from this status"
            })
        }else{
            return res.status(200).json(reports);
        }
    } catch (err) {
        if(err){
            return res.json(500, {
                message: "internal server error"
            })
        }
    }
}