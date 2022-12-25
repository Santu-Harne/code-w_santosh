const mysql = require('mysql')

// connection string
const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    password: '',
    database: process.env.DB_NAME
});

module.exports = con