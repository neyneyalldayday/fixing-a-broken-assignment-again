const inquirer = require('inquirer');
const { allEmp, empByDep, empByMngt, addEmp, updateEmp } = require('./lib/employee');
const { viewDep, addDep } = require('./lib/department');
const { viewRoles, addRole } = require('./lib/roles');
const { viewTotalBud } = require('./lib/calculations');
const connection = require('./connection');



console.clear();

console.log("\n Irasshaimase! \n (Japanese for 'Welcome!')");

const startPrompt = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'mainMenu',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'View All Employees By Department', 'View All Employees By Manager', 'Add Employee', 'Update Employee Role', 'View Departments', 'Add Department', 'View Roles', 'Add Role', 'View totalized budget', 'Exit']
        }
    ])
    .then((res) => {
        console.log("selected:  " + res.mainMenu)
        switch (res['mainMenu']) {
            case 'View All Employees':             
                allEmp(startPrompt);
                break;
            case 'View All Employees By Department':
                empByDep(startPrompt);
                break;
            case 'View All Employees By Manager':
                empByMngt(startPrompt);
                break;
            case 'Add Employee':
                addEmp(startPrompt);
                break;
            case 'Update Employee Role':
                updateEmp(startPrompt);
                break;
            case 'View Departments':
                viewDep(startPrompt);
                break;
            case 'Add Department':
                addDep(startPrompt);
                break;
            case 'View Roles':
                viewRoles(startPrompt);
                break;
            case 'Add Role':
                addRole(startPrompt);
                break;
            case 'View totalized budget':
                viewTotalBud(startPrompt);
                break;
            case 'Exit':
                break;
        }
    })
    .catch((err) => {
        console.log(err);
        connection.end(); // Close database connection on error
      });
};





startPrompt()

