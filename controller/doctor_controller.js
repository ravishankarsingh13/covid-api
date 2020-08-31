// import doctor model for schema 
const Doctor = require('../model/doctor');

// import jwt token
const jwt = require('jsonwebtoken');

//create the rigister model for doctor registration
module.exports.register = async function(req, res){
    try {
        let doctor = await Doctor.findOne({username: req.body.username});

        if(!doctor){
            let doctor = await Doctor.create(req.body);
            return res.json(200, {
                message: "Doctor registration successful"
            })

        }else{
            return res.json(409, {
                message: "user already exist"
            })

        }
    } catch (err) {
        return res.json(500, {
            message: "Internal server error"
        })
    }
}

// login doctor using your username and password and create token
module.exports.login = async function(req,res){
    try {
        let doctor = await Doctor.findOne({username: req.body.username});

        if(!doctor || doctor.password != req.body.password){
            return res.json(422, {
                message: "Invalid username or password"
            });
        }
        return res.json(200, {
            message: 'Sign in successful, here is your token keep it safe',
            data: {
                token: jwt.sign(doctor.toJSON(), 'thisismysecretkey', {expiresIn: '1000000'})
            }
        })

    } catch (err) {
        return res.json(500, {
            message: "Some Internal error"
        })
    }
}