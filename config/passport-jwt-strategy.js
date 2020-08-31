// import passport
const passport = require('passport');
// import passport-jwt strategy
const JwtStrategy = require('passport-jwt').Strategy;   
const ExtractJwt = require('passport-jwt').ExtractJwt;

// import doctor model for authentication
const Doctor = require('../model/doctor');

// define option for encryption
let opts ={
    jwtFromRequest :ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'thisismysecretkey'
}

//create Token
passport.use(new JwtStrategy(opts,function(jwtPayload,done){
    Doctor.findById(jwtPayload._id,(err,user)=>{
        if(err){console.log('Error in finding Doctor');return;}

        if(user){
            return done(null,user);
        }
        else{
            return done(null,false);
        }
    })
}))

// export passport 
module.exports = passport;