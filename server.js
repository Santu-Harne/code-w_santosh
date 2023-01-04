require('dotenv').config()

const express = require('express')
const cookieSession = require("cookie-session")
const passport = require('passport');
const cors = require('cors')
const cookieParser = require("cookie-parser")
const assert = require('assert')
const { StatusCodes } = require('http-status-codes')
const path = require('path')
const passportSetup = require('./middleware/passportRegister')

const connectDB = require('./db/db')
const con = require('./db/connectionString')

//port
const PORT = process.env.PORT || 7000

// ref
const app = express()

// body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// static
app.use(express.static('./Uploads'))

app.use(cookieSession({
    name: 'session',
    keys: ['code-w'],
    maxAge: 1 * 24 * 60 * 60 * 1000,
    path: '/socialAuth/login/success'
}))

app.use(passport.initialize());
app.use(passport.session());



// google login code
app.get('/success', (req, res) => res.send(userProfile));
app.get('/error', (req, res) => res.send("error logging in"));



// middleware
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}))
// app.use(cors())
app.use(cookieParser(process.env.TOKEN_SECRET)) // token secret for signed cookies

// route modules
const authRoute = require('./route/authRoute')
const mailRoute = require('./route/mailRoute')
const socialRegisterRoute = require('./route/socialRegisterRoute')

// primary route
app.use('/auth', authRoute)
app.use('/mail', mailRoute)
app.use('/socialAuth', socialRegisterRoute)

// default route
app.all('*', (req, res) => {
    res.status(StatusCodes.NOT_FOUND).json({ msg: "The Request route path not found" })
})

const start = async () => {
    try {
        await connectDB()
        app.listen(PORT, () => {
            console.log(`server is listening @ http://localhost:${PORT}`);
        })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

start()


