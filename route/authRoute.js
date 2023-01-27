const route = require('express').Router()
const authController = require('../controller/authController')
const auth = require('../middleware/auth')
const fileUpload = require('../middleware/fileUpload')

route.post('/register', authController.register)
route.post('/file/upload', fileUpload, authController.upload)
route.get('/allusers', authController.allUsers)
route.get('/getUser/:email', authController.getUser)
route.put('/update/:id', authController.updateUser)
route.delete('/delete/:id', authController.deleteUser)
route.post('/login', authController.login)
route.get('/logout', authController.logout)
route.get('/refreshToken', authController.refreshToken)
route.get('/register/verify/:registerToken', authController.isVerified)
route.post('/forgotPassword', authController.forgotPassword)
route.put('/resetPassword/:registerToken', authController.resetPassword)

route.post('/userProfile/addcard', authController.addCard)
route.get('/userProfile/getcards/:email', authController.getCards)
route.get('/userProfile/getsinglecard/:id', authController.getSingleCard)
route.put('/userProfile/editcard/:id', authController.EditCard)
route.delete('/userProfile/deletecard/:id', authController.deleteCard)

route.post('/userProfile/addaddress', authController.addAddress)
route.get('/userProfile/getbillingaddress/:email', authController.getBillingAddress)
route.get('/userProfile/getsingleaddress/:id', authController.getSingleAddress)
route.put('/userProfile/editaddress/:id', authController.EditAddress)
route.delete('/userProfile/deleteaddress/:id', authController.deleteAddress)


route.get('/billinghistory/:email', authController.getBillingHistory)

route.post('/login/code_w', authController.login_code_W)

module.exports = route
