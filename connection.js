const mysql = require("mysql2");



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'FrankY242424!',
    database: 'employees'
});

module.exports = connection