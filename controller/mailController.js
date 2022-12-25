const { StatusCodes } = require("http-status-codes")
const sendingMail = require('../middleware/mail')

const mailController = {
    sendMail: async (req, res) => {
        try {

            const { to, subject, content } = req.body

            const result = await sendingMail(to, subject, content)

            res.json({ result })

        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message })
        }
    }
}

module.exports = mailController