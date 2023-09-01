const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET_KEY
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
module.exports.authenticate = (req, res, next) => {
    // console.log('**************', req.headers);
    // ! req.cookies.userToken 
    jwt.verify(req.cookies.userToken, SECRET, (err,payload) => {
        if(err){
            res.status(401).json({verified: false})
        }
        else{
            console.log('Authenticated')
            // console.log(payload);////
            console.log('PAYLOAD', payload);//++

            next()
        }
    })
}