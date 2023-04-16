const connection = require('../connection');
const inquirer = require ('inquirer');
// View department
const viewDep = () => {
    connection.query(
        `SELECT * FROM department`,
        function (err, results, fields) {
            if (err) {
                console.log(err.message);
                return;
            }
            console.table(results);           
        }
    )
}

const addDep = () => {
    inquirer
        .prompt({
            type: 'text',
            name: 'dep_name',
            message: 'Please enter the name of the department you would like to add: '
        })
        .then((data) => {
            connection.query(
                `INSERT INTO department (name)
                VALUES(?)`,
                [data.dep_name],
                function (err, results, fields) {
                    if (err) {
                        console.log(err.message);
                        return;
                    }

                    console.log('Added department!');
                   
                }
            )
        })
}

module.exports = { viewDep, addDep }