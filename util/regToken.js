const jwt = require("jsonwebtoken")

const regToken = (user) => {
    return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '10m' })
}


module.exports = { regToken }