require('dotenv').config()

const express = require('express')
const cookieSession = require("cookie-session")
const passport = require('passport');
const cors = require('cors')
const cookieParser = require("cookie-parser")
const { StatusCodes } = require('http-status-codes')
const path = require('path')

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

// middleware
app.use(cors(
    {
        credentials: true,
        origin: "*"
    }
))

app.use(cookieParser(process.env.TOKEN_SECRET)) // token secret for signed cookies

//   serialized and deserialized.
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

// route modules
const authRoute = require('./route/authRoute')
const mailRoute = require('./route/mailRoute')

// primary route
app.use('/auth', authRoute)
app.use('/mail', mailRoute)

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


