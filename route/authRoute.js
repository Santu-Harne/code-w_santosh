const route = require('express').Router()
const authController = require('../controller/authController')
const auth = require('../middleware/auth')

route.post('/register', authController.register)
route.get('/allusers', authController.allUsers)
route.get('/getuser/:id', authController.getUser)
route.put('/update/:id', authController.updateUser)
route.delete('/delete/:id', authController.deleteUser)
route.post('/login', authController.login)
route.get('/logout', authController.logout)
route.get('/refreshToken', authController.refreshToken)
route.get('/register/verify/:registerToken', authController.isVerified)
route.post('/forgotPassword', authController.forgotPassword)
route.put('/resetPassword/:registerToken', authController.resetPassword)

module.exports = route
