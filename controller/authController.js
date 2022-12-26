const assert = require('assert')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const { createAccessToken } = require('../util/token')
const { regToken } = require('../util/regToken')
const { StatusCodes } = require('http-status-codes')
const con = require('../db/connectionString')
const sendingMail = require('../middleware/mail')
const regTemplate = require('../template/regTemplate')
const resetPasswordTemplate = require('../template/resetPasswordTemplate')


const authController = {
    register: async (req, res) => {
        try {
            const { Account_Type, Name, Email, Password, Account_Plan, Team_Size, Address, Mobile, Business_Type, Document_Type, Document_Number, Document_Location, Name_On_Card, Card_Number, Expire_Date, isVerified } = req.body

            const encPass = await bcrypt.hash(Password, 10)
            const registerToken = regToken({ email: Email, password: Password })

            const userData = {
                Account_Type,
                Name,
                Email,
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

            let sql1 = `SELECT * FROM Account_Details WHERE Email=?`
            con.query(sql1, [Email], function (err, response) {
                if (err) assert.deepStrictEqual(err, null);

                const user = response[0];

                if (user)
                    return res.status(StatusCodes.NOT_ACCEPTABLE).json({ msg: "Account exists with given EmailId, try another one..!" })

                else {
                    let sql = `INSERT INTO Account_Details SET ?`

                    con.query(sql, userData, function (err, response) {
                        if (err) assert.deepStrictEqual(err, null);
                        // console.log(`Inserted successfully`)

                        const template = regTemplate(Name, Email, Password, registerToken)
                        const subject = 'Confirmation of registration with Code-W'
                        sendingMail(Email, subject, template)
                    })
                    res.status(StatusCodes.OK).json({ msg: "User registered successfully", data: userData })
                }
            })

        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
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
            const id = req.params.id

            // read single user data
            let sql = `SELECT * FROM Account_Details WHERE id=?`
            con.query(sql, [id], function (err, response) {
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
            const { id, Name, Email, Team_Size, Address, Mobile, Business_Type, Document_Type, Document_Number, Document_Location, Name_On_Card, Card_Number, Expire_Date } = req.body

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

                    con.query(sql, ["true", token], function (err, response) {
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

                        if (!extUser)
                            return res.status(StatusCodes.NOT_FOUND).json({ msg: "User doesn't exists.." })

                        if (!match) {
                            return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Invalid Password" })
                        }
                        if (extUser.isVerified != 'true')
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
            console.log(Email);
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
    }
}



module.exports = authController