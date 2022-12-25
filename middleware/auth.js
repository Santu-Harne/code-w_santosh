const { StatusCodes } = require("http-status-codes")
const jwt = require('jsonwebtoken')

// logic to read logged user generated token
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err)
                return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Token required" })

            req.user = user
            next() // forwarding response to next controller
        })

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message })
    }
}
module.exports = auth