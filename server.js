const inquirer = require('inquirer');
const mysql = require('mysql2');
const { createConnection } = require('net');

const PORT = process.env.PORT || 3001;
const app = express();


// connect to db
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username
    user: 'root',
  // MySQL password
    password: '',
    database: 'employee_db',
  },
  console.log(`database connected use with care`)
);

connection.connect(
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
    switch (question.choice) {
      case 'View Departments':
        return viewDepartments();
        break;
      case 'Add Department':
        return addDepartment();
        break;
      case 'View Role':
        return viewRole();
        break;
      case 'Add Role':
        return addRole();
        break;
      case 'View Employees':
        return viewEmployees();
        break;
      case 'Update Employee':
        return updateEmployee();
        break;
      default:
        return finished();             
    }
  } catch (err) {
    console.log(err)
  };
};




