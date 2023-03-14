const inquirer = require('inquirer');
const mysql = require('mysql2');
require ('console.table')

 

// connect to db
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username
    user: 'root',
  // MySQL password
  // remove password before pushing
    password: '',
    database: 'employee_db',
  },
  console.log(`database connected use with care`)
);
// throwing db.connect is not a function
// db.connect(
//   console.log(`database connected use with care`)
// );
// console.log(db);
async function startQuestions() {
  try {
    const question = await inquirer.prompt([{
      type: 'list',
      name: 'start',
      message: 'Make a selection to get started',
      choices: ['View Departments', 'Add Department', 'View Roles', 'Add Role', 'View Employees', 'Update Employee', 'Update Employee Role', 'Finished']
    }]);
    
    switch (question.start) {
      case 'View Departments':
        return viewDepartments();
        break;
      // case 'Add Department':
      //   return addDepartment();
      //   break;
      case 'View Roles':
        return viewRole();
        break;
      // case 'Add Role':
      //   return addRole();
      //   break;
      case 'View Employees':
        return viewEmployees();
        break;
      // case 'Update Employee':
      //   return updateEmployee();
      //   break;
      // default:
      //   return finished();             
    }
  } catch (err) {
    console.log(err)
  };
};

function viewDepartments() {
  db.query('SELECT * FROM department', function (err, results) {
    // console.log(results)
    console.table(results)
    startQuestions();
  });
  // run startQuestions
}; 

//TODO: look at department schema use to ask user questions inquire(results) take results and turn into values to populate db do same thing for role
// function addDepartment() {
//   inquirer.prompt 
// }

function viewRole() {
  db.query('SELECT * FROM role', function (err, results) {
    console.table(results);
    startQuestions();
  });
};

function viewEmployees() {
  db.query('SELECT * FROM employee', function (err, results) {
    // console.log(results)
    console.table(results)
    startQuestions();
  });
};
startQuestions();




