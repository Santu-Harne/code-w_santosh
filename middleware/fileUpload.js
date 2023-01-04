const multer = require('multer');
const path = require("path")

// storage
const myStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Uploads') // destination location to store file
    },
    filename: (req, file, cb) => {
        // cb(null, file.originalname)
        cb(null, `doc-${new Date().getTime().toString()}${path.extname(file.originalname)}`)
        // abc.txt => doc-12323434.txt
    }
})

// upload
const upload = multer({
    storage: myStorage,
    limits: {
        // file size
        fileSize: 1 * 1024 * 1024 // 1MB
    }
}).single('myFile')

module.exports = upload