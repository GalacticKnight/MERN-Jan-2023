const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET_KEY
const {authenticate} = require('../config/jwt.config');
module.exports = {
    registerUser: async (req, res) => {
        // Check if the email entered in the form is already in the DB 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        try{
            console.log("here");
            const potentialUser = await User.findOne({email: req.body.email})
            if (potentialUser){
                res.status(400).json({message: 'This email already exists'})
            }
            else{
                const newUser = await User.create(req.body)
                // * jwt.sign creates the token the first thing we pass is what we want to serialize (payload)
                // * the second param is a secret key to serialize 
                const userToken = jwt.sign({_id: newUser._id, email:newUser.email}, SECRET, {expiresIn:'7200000ms'})
                console.log(userToken);
                // const expires = (new Date(Date.now())).toLocaleString('en-US', {timeZone:"America/Los_Angeles"})
                // const date = new Date()
                // console.log(date);
                // console.log('***************',expires);
                res.status(201)
                .cookie('userToken', userToken, {httpOnly:true,  maxAge: 2 * 60 * 60 * 1000 })
                .json({success: 'user logged in',userToken:userToken, user: newUser})
            }
        }
        catch(err){
            console.log(err);
            res.status(400).json({error: err})
        }
    },
    login: async (req, res) => {
        try{
            const user = await User.findOne({email:req.body.email})
            if(user){
                const passwordMatch = await bcrypt.compare(req.body.password, user.password)
                if (passwordMatch){
                    const userToken = jwt.sign({_id: user._id, email:user.email}, SECRET, {expiresIn:'7200000ms'})
                    res.status(201).cookie('userToken', userToken, {httpOnly:true,  maxAge: 2 * 60 * 60 * 1000 }).json({success: 'user logged in',userToken:userToken, user: user})
                }else{
                    res.status(400).json({message:"Invalid Email/Password"})
                }
            }
            else{
                res.status(400).json({message:"Invalid Email/Password"})
            }
        }
        catch(err){
            res.status(400).json({error: err})
        }
    }, 
    logout: (req, res) => {
        res.clearCookie('userToken')
        res.json({message:'Logged out successfully'})
    },
    verifyToken: async (req, res) =>{
        // const response = authenticate()
        res.json({message:req.user})
    }
}