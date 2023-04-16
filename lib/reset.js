const connection = require('../connection');



const dropMnger = () => {
    connection.query(
        `DROP TABLE IF EXISTS manager`,
        function (err, results, fields) {
            if (err) {
                console.log(err.message);
            }
            console.log('')
        }
    )
};

const createMngerTable = () => {
    connection.query(
        `CREATE TABLE manager (
            id INT NOT NULL AUTO_INCREMENT,
            first_name VARCHAR(30),
            last_name VARCHAR(30),
            PRIMARY KEY (id)
        )`,
        function (err, results, fields) {
            if (err) {
                console.log(err.message);
            }
            console.log('')
        }
    )
};

const addMngers = () => {
    connection.query(
        `INSERT INTO manager (first_name, last_name)
        SELECT first_name,
            last_name
        FROM employee
        WHERE manager_confirm = 1`,
        function (err, results, fields) {
            if (err) {
                console.log(err.message);
            }
            console.log('')
        }
    )
};



module.exports = { dropMnger, createMngerTable, addMngers }