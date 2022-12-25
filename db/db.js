const assert = require('assert')
const con = require('./connectionString')

// connect function
const connectDB = () => {
    con.connect(function (err) {
        if (err) assert.deepStrictEqual(err, null);
        console.log('mysql db connected');
    })
}

module.exports = connectDB
