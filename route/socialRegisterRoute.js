const route = require('express').Router()
const { StatusCodes } = require("http-status-codes")
const passport = require("passport")

const CLIENT_URL = "http://localhost:3000"
const REGISTER_URL = "http://localhost:3000/AccountInfoGoogle"

route.get("/login/failed", (req, res) => {
    res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        msg: "Failed to authenticate"
    })
})


route.get("/login/Success", (req, res) => {
    if (req.user) {
        res.status(StatusCodes.OK).json({
            success: true,
            msg: "Authenticated Successfully and user registered",
            user: req.user
            // cookies: req.cookies
        })
    }
})

route.get("/logout", (req, res) => {
    // res.clearCookie("session", { path: '/socialAuth/login/success' })
    req.logout();
    res.redirect(CLIENT_URL)
})

route.get('/google', passport.authenticate("google", { scope: ["profile", "email"] }))
route.get('/google/callback', passport.authenticate('google', {
    successRedirect: REGISTER_URL,
    failureRedirect: "/login/failed"
}))
// route.get('/linkedIn', socialLoginController.linkedInLogin)

module.exports = route

//! http://localhost:7000/socialAuth/google/callback