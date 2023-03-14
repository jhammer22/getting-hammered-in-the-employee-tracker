const inquirer = require('inquirer');
const mysql = require('mysql2');
require ('console.table')

 

// connect to db
const db = mysql.createConnection(
  {
    host: 'localhost',
    
    user: 'root',
  
  // remove password before pushing
    password: '',
    database: 'employee_db',
  },
  console.log(`database connected use with care`)
);

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
      case 'Add Department':
        return addDepartment();
        break;
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


function viewRole() {
  db.query('SELECT * FROM role', function (err, results) {
    console.table(results);
    startQuestions();
  });
};

function viewEmployees(results) {
  db.query('SELECT * FROM employee', function (err, results) {
    // console.log(results)
    console.table(results)
    startQuestions();
  });
};

// look at department schema use to ask user questions inquire(results) take results and turn into values to populate db do same thing for role and employees
function addDepartment() {
  inquirer.prompt([{
    type: 'input',
    name: 'departmentAdd',
    message: 'What kind of department would you like to add?',
  }]).then(function(results) {
    db.query('INSERT INTO department SET ?', {
      name: results.name,
    });
    console.table(results);
    startQuestions();
  }); 
};
 //TODO write add employee and add role functions then try to use a switch case to call those functions based on department user choice


startQuestions();







