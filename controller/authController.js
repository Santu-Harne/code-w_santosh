const assert = require('assert')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const { createAccessToken } = require('../util/token')
const { regToken } = require('../util/regToken')
const { StatusCodes } = require('http-status-codes')
const con = require('../db/connectionString')
const sendingMail = require('../middleware/mail')
const resetPasswordTemplate = require('../template/resetPasswordTemplate')
const registerTemplate = require('../template/registerTemplate')
const verifyTemplate = require('../template/verifyTemplate')

const axios = require('axios')

const axiosIns = axios.create({
    baseURL: 'http://localhost:3000'
})


const authController = {
    register: async (req, res) => {
        try {
            const { Account_Type, Name, Email, Image, Password, Account_Plan, Team_Size, Address, Mobile, Business_Type, Document_Type, Document_Number, Document_Location, Name_On_Card, Card_Type, Card_Number, Expire_Date, isVerified } = req.body

            const encPass = await bcrypt.hash(Password, 10)
            const registerToken = regToken({ email: Email, password: Password })

            const userData = {
                Account_Type,
                Name,
                Email,
                Image,
                Password: encPass,
                Account_Plan,
                Team_Size,
                Address,
                Mobile,
                Business_Type,
                Document_Type,
                Document_Number,
                Document_Location,
                Name_On_Card,
                Card_Number,
                Expire_Date,
                isVerified,
                registerToken
            }
            const cardData = {
                Email,
                Name_On_Card,
                Card_Type,
                Card_Number,
                Expire_Date,
            }

            let sql1 = `SELECT * FROM Account_Details WHERE Email=?`
            con.query(sql1, [Email], function (err, response) {
                if (err) assert.deepStrictEqual(err, null);

                const user = response[0];

                if (user)
                    return res.status(StatusCodes.NOT_ACCEPTABLE).json({ msg: "Account exists with given EmailId, try another one..!" })

                else {
                    let sql = `INSERT INTO Account_Details SET ?`
                    let cardSql = `INSERT INTO my_cards SET ?`

                    con.query(sql, userData, function (err, response) {
                        if (err) assert.deepStrictEqual(err, null);
                        // console.log(`Inserted successfully`)

                        con.query(cardSql, cardData, function (err, response) {
                            if (err) assert.deepStrictEqual(err, null)
                        })

                        const subject = 'Confirmation of registration with Code-W'
                        if (isVerified === false) {
                            const template = verifyTemplate(Name, registerToken)
                            sendingMail(Email, subject, template)
                        }
                        else if (isVerified === true) {
                            const template = registerTemplate(Name, Email)
                            sendingMail(Email, subject, template)
                        }
                    })
                    res.status(StatusCodes.OK).json({ msg: "User registered successfully", data: userData })
                }
            })

        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    },
    upload: async (req, res) => {
        try {
            const uploadedFile = req.file;

            res.json({ data: uploadedFile })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    allUsers: async (req, res) => {
        try {

            // read all users data
            let sql = `SELECT * FROM Account_Details`
            con.query(sql, function (err, response) {
                if (err) assert.deepStrictEqual(err, null);
                // console.log(`data = `, response)

                res.status(StatusCodes.OK).json({ msg: "All Users Data", data: response })
            })
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    },
    getUser: async (req, res) => {
        try {
            const email = req.params.email

            // read single user data
            let sql = `SELECT * FROM Account_Details WHERE Email=?`
            con.query(sql, [email], function (err, response) {
                if (err) assert.deepStrictEqual(err, null);
                // console.log(`data = `, response)

                res.status(StatusCodes.OK).json({ msg: "User Data", data: response[0] })
            })
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    },
    updateUser: async (req, res) => {
        try {
            const userId = req.params.id
            const { Name, Email, Team_Size, Address, Mobile, Business_Type, Document_Type, Document_Number, Document_Location, Name_On_Card, Card_Number, Expire_Date } = req.body

            let sql = 'UPDATE Account_Details SET Name = ?, Email = ?,Team_Size = ?, Address = ?, Mobile = ?, Document_Type = ?, Document_Number = ?, Document_Location = ?, Name_On_Card = ?, Card_Number = ?, Expire_Date = ?  WHERE id =?'

            con.query(sql, [Name, Email, Team_Size, Address, Mobile, Business_Type, Document_Type, Document_Number, Document_Location, Name_On_Card, Card_Number, Expire_Date, userId], function (err, response) {
                if (err) assert.deepStrictEqual(err, null);

                res.status(StatusCodes.OK).json({ msg: "User Data updated successfully", updatedData: req.body })
            })
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    },
    isVerified: async (req, res) => {
        try {
            const token = req.params.registerToken

            // read single user data
            let sql1 = `SELECT * FROM Account_Details WHERE registerToken=?`
            con.query(sql1, [token], function (err, response) {
                if (err) assert.deepStrictEqual(err, null);
                const user = response[0]

                if (!user)
                    return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Token mismatched" })

                else {
                    let sql = `UPDATE account_details SET isVerified = ?  WHERE registerToken = ?`

                    con.query(sql, [true, token], function (err, response) {
                        if (err) assert.deepStrictEqual(err, null);

                        res.json({ msg: "Email verified successfully" })
                    })
                }
            })


        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message })
        }
    },
    deleteUser: async (req, res) => {
        try {
            const id = req.params.id

            // delete single user
            let sql = `DELETE FROM Account_Details WHERE id=?`
            con.query(sql, [id], function (err, response) {
                if (err) assert.deepStrictEqual(err, null);
                // console.log("User Data deleted successfully")

                res.status(StatusCodes.OK).json({ msg: "User Data deleted successfully" })
            })

        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message })
        }
    },
    login: async (req, res) => {
        try {
            const { Email, Password } = req.body
            // console.log({ Email, Password });

            con.query(`SELECT * FROM Account_Details WHERE Email=?`, Email, function (err, response) {
                if (err) assert.deepStrictEqual(err, null);

                // user email exists or not
                const extUser = response[0]
                if (!extUser)
                    return res.status(StatusCodes.NOT_FOUND).json({ msg: "User doesn't exists.." })
                else {
                    // compare password
                    bcrypt.compare(Password, extUser.Password, (err, match) => {
                        if (err) assert.deepStrictEqual(err, null);

                        if (!match) {
                            return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Invalid Password" })
                        }
                        if (extUser.isVerified != true)
                            return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Your account is not verified, Please verify your account for login" })
                        else {
                            // generate token
                            const accessToken = createAccessToken({ id: extUser.id })

                            // save token in cookies
                            res.cookie('refreshToken', accessToken, {
                                httpOnly: true,
                                signed: true,
                                path: '/auth/refreshToken',
                                maxAge: 1 * 24 * 60 * 60 * 1000
                            })

                            res.json({ msg: 'Login Successful', accessToken })

                        }
                    });
                }

            })
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'main error' })
        }
    },
    login_code_W: async (req, res) => {
        try {
            const { Email, Password } = req.body
            // console.log({ Email, Password });

            con.query(`SELECT * FROM Account_Details WHERE Email=?`, Email, function (err, response) {
                if (err) assert.deepStrictEqual(err, null);

                // user email exists or not
                const extUser = response[0]
                if (!extUser)
                    return res.status(StatusCodes.NOT_FOUND).json({ msg: "User doesn't exists.." })

                else {
                    // compare password
                    bcrypt.compare(Password, extUser.Password, (err, match) => {
                        if (err) assert.deepStrictEqual(err, null);

                        if (!match) {
                            return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Invalid Password" })
                        }
                        if (extUser.isVerified != true)
                            return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Your account is not verified, Please verify your account for login" })

                        return res.status(StatusCodes.OK).json({ msg: "Data From Code-W", data: extUser })
                    });
                }
            })
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'main error' })
        }
    },
    logout: async (req, res) => {
        try {
            res.clearCookie('refreshToken', { path: "/auth/refreshToken" })
            res.json({ msg: "Logged out successfully" })
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message })
        }
    },
    refreshToken: async (req, res) => {
        try {
            const refresh = req.signedCookies.refreshToken;

            if (!refresh)
                return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Session Expired, Login again.." })

            // valid user id or not
            jwt.verify(refresh, process.env.TOKEN_SECRET, (err, user) => {
                if (err)
                    return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Invalid Access Token.. Login again" })

                // valid token
                const accessToken = createAccessToken({ id: user.id })
                res.json({ accessToken })
            })

            // res.json({ refresh })

        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message })
        }
    },
    forgotPassword: async (req, res) => {
        try {
            const { Email } = req.body
            let sql1 = `SELECT * FROM account_details WHERE Email=?`
            con.query(sql1, [Email], function (err, response) {
                if (err) assert.deepStrictEqual(err, null);

                const user = response[0]
                if (!user)
                    return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Invalid Email Id..." })

                else {
                    const template = resetPasswordTemplate(Email, user.registerToken)
                    const subject = "Reset Password with CODE-W"
                    sendingMail(Email, subject, template)

                    return res.status(StatusCodes.OK).json({ msg: "Reset password link sent to registered emailId" })
                }
            })
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message })

        }
    },
    resetPassword: async (req, res) => {
        try {
            const registerToken = req.params.registerToken
            const { newPassword, confirmPassword } = req.body
            const encPass = await bcrypt.hash(newPassword, 10)

            // read single user data
            let sql1 = `SELECT * FROM account_details WHERE registerToken=?`
            con.query(sql1, [registerToken], function (err, response) {
                if (err) assert.deepStrictEqual(err, null);

                const user = response[0]
                if (!user)
                    return res.status(StatusCodes.BAD_REQUEST).json({ msg: "User doesn't exist... please check your EmailId" })


                if (newPassword !== confirmPassword)
                    return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Passwords doesn't match" })
                else {
                    let sql = `UPDATE account_details SET Password = ?  WHERE registerToken = ?`

                    con.query(sql, [encPass, registerToken], function (err, response) {
                        if (err) assert.deepStrictEqual(err, null);

                        res.status(StatusCodes.OK).json({ msg: "password changed successfully" })
                    })
                }
            })

        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message })
        }
    },
    addCard: async (req, res) => {
        try {
            const { Email, Name_On_Card, Card_Type, Card_Number, Expire_Date } = req.body

            const cardData = {
                Email,
                Name_On_Card,
                Card_Type,
                Card_Number,
                Expire_Date,
            }
            let cardSql = `INSERT INTO my_cards SET ?`

            con.query(cardSql, cardData, function (err, response) {
                if (err) assert.deepStrictEqual(err, null)

                res.status(StatusCodes.OK).json({ msg: "Card added successfully", data: response })
            })
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message })
        }
    },
    getSingleCard: async (req, res) => {
        try {
            const id = req.params.id

            // read single user data
            let sql = `SELECT * FROM my_cards WHERE Id=?`
            con.query(sql, [id], function (err, response) {
                if (err) assert.deepStrictEqual(err, null);
                // console.log(`data = `, response)

                res.status(StatusCodes.OK).json({ msg: "User Card Data", data: response[0] })
            })
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    },
    EditCard: async (req, res) => {
        try {
            const id = req.params.id
            const { Name_On_Card, Card_Type, Card_Number, Expire_Date } = req.body

            let sql = 'UPDATE my_cards SET Name_On_Card = ?, Card_Type = ?, Card_Number = ?, Expire_Date = ?  WHERE id =?'

            con.query(sql, [Name_On_Card, Card_Type, Card_Number, Expire_Date, id], function (err, response) {
                if (err) assert.deepStrictEqual(err, null);

                res.status(StatusCodes.OK).json({ msg: "Card Data updated successfully", updatedData: req.body })
            })
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    },
    deleteCard: async (req, res) => {
        try {
            const id = req.params.id

            // delete single user
            let sql = `DELETE FROM my_cards WHERE id=?`
            con.query(sql, [id], function (err, response) {
                if (err) assert.deepStrictEqual(err, null);
                // console.log("Payment Card deleted successfully")

                res.status(StatusCodes.OK).json({ msg: "Payment Card deleted successfully" })
            })

        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message })
        }
    },
    getCards: async (req, res) => {
        try {
            const email = req.params.email

            // read single user data
            let sql = `SELECT * FROM my_cards WHERE Email=?`
            con.query(sql, [email], function (err, response) {
                if (err) assert.deepStrictEqual(err, null);
                // console.log(`data = `, response)

                res.status(StatusCodes.OK).json({ msg: "User Cards", data: response })
            })
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    },
    addAddress: async (req, res) => {
        try {
            const { Email, Address_Name, street, city, country } = req.body

            const addressData = {
                Email,
                Address_Name,
                street,
                city,
                country,
            }
            let addressSql = `INSERT INTO billing_address SET ?`

            con.query(addressSql, addressData, function (err, response) {
                if (err) assert.deepStrictEqual(err, null)

                res.status(StatusCodes.OK).json({ msg: "Card added successfully", data: response })
            })
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message })
        }
    },
    getBillingAddress: async (req, res) => {
        try {
            const email = req.params.email

            // read single user data
            let sql = `SELECT * FROM billing_address WHERE Email=?`
            con.query(sql, [email], function (err, response) {
                if (err) assert.deepStrictEqual(err, null);
                // console.log(`data = `, response)

                res.status(StatusCodes.OK).json({ msg: "Billing Address", data: response })
            })
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    },
    getSingleAddress: async (req, res) => {
        try {
            const id = req.params.id

            // read single user data
            let sql = `SELECT * FROM billing_address WHERE Id=?`
            con.query(sql, [id], function (err, response) {
                if (err) assert.deepStrictEqual(err, null);
                // console.log(`data = `, response)

                res.status(StatusCodes.OK).json({ msg: "User Address Data", data: response[0] })
            })
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    },
    EditAddress: async (req, res) => {
        try {
            const id = req.params.id
            const { Address_Name, street, city, country } = req.body

            let sql = 'UPDATE billing_address SET Address_Name = ?, street = ?, city = ?, country = ?  WHERE id =?'

            con.query(sql, [Address_Name, street, city, country, id], function (err, response) {
                if (err) assert.deepStrictEqual(err, null);

                res.status(StatusCodes.OK).json({ msg: "Address updated successfully", updatedData: req.body })
            })
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    },
    deleteAddress: async (req, res) => {
        try {
            const id = req.params.id

            // delete single user
            let sql = `DELETE FROM billing_address WHERE id=?`
            con.query(sql, [id], function (err, response) {
                if (err) assert.deepStrictEqual(err, null);
                // console.log("Payment Card deleted successfully")

                res.status(StatusCodes.OK).json({ msg: "Address deleted successfully" })
            })

        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message })
        }
    },
    getBillingHistory: async (req, res) => {
        try {
            const email = req.params.email

            // read single user data
            let sql = `SELECT * FROM billing_history WHERE Email=?`
            con.query(sql, [email], function (err, response) {
                if (err) assert.deepStrictEqual(err, null);
                // console.log(`data = `, response)

                res.status(StatusCodes.OK).json({ msg: "Billing History", data: response })
            })
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    }
}



module.exports = authController