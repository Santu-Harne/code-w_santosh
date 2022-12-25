require('dotenv').config()

const express = require('express')
const cors = require('cors')
const cookieParser = require("cookie-parser")
const assert = require('assert')
const { StatusCodes } = require('http-status-codes')
const path = require('path')

const connectDB = require('./db/db')
const con = require('./db/connectionString')

//port
const PORT = process.env.PORT

// ref
const app = express()

// body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// middleware
app.use(cors())
app.use(cookieParser(process.env.TOKEN_SECRET)) // token secret for signed cookies

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
        // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

start()


