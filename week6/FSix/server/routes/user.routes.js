const UserController = require('../controllers/user.controller')
const {authenticate} = require('../config/jwt.config');
module.exports = (app) => {
    app.post('/api/register', UserController.registerUser)
    app.get('/api/verify', authenticate, UserController.verifyToken)
    app.post('/api/login', UserController.login)
    app.post('/api/logout', UserController.logout)
    // app.get('/api/loggedInUser/:userid', UserController.findOneUser)
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++