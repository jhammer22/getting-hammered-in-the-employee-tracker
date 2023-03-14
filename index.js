const inquirer = require('inquirer');
const mysql = require('mysql2');
require ('console.table')

 

// connect to db
const db = mysql.createConnection(
  {
    host: 'localhost',
    
    user: 'root',
  
  // remove password before pushing
    password: 'Bunkbeds@2005',
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
      choices: ['View Departments', 'Add Department', 'View Roles', 'Add Role', 'View Employees', 'Update Employee', 'Update Employee Role', 'Add Employee', 'Finished']
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
      case 'Add Employee':
        return addEmployee();
        break;
        return finished();             
    }
  } catch (err) {
    console.log(err)
  };
};

function viewDepartments() {
  db.query('SELECT * FROM department', function (err, results) {
    console.table(results)
    startQuestions();
  });
}; 


function viewRole() {
  db.query('SELECT * FROM role', function (err, results) {
    console.table(results);
    startQuestions();
  });
};

function viewEmployees(results) {
  db.query('SELECT * FROM employee', function (err, results) {
    console.table(results)
    startQuestions();
  });
};

function addDepartment(results) {
  inquirer.prompt([{
    type: 'input',
    name: 'departmentAdd',
    message: 'What kind of department would you like to add?',
  }]).then(function(answers) {
    db.query('INSERT INTO department SET ?', {
      name: answers.departmentAdd,
    });
    console.table(results);
    startQuestions();
  }); 
};

function addRole(results) {
  inquirer.prompt([
    {
      name: 'title',
      type: 'input',
      message: 'Enter role name'
    },
    {
      name: 'salary',
      type: 'input',
      message: 'Enter Salary'
    },
    {
      name: 'department',
      type: 'list',
      message: 'Select department ID this role belongs to',
      choices:  viewDepartments(),
    }
  ]).then(function(answers) {
    db.query('INSERT INTO role SET ?', {
      title: answers.title,
      salary: answers.salary,
      department_id: answers.viewDepartments(),
    });
    console.table(results);
    startQuestions();
  })
};



function addEmployee(results) {
  db.query('SELECT * FROM role', function (err, results) {
      const roleChoices = results.map(result => {
        return {name:result.title, value:result.id}
      })
 
  inquirer.prompt([
    {
      name: 'first_name',
      type: 'input',
      message: 'Enter new employee first name'
    },
    {
      name: 'last_name',
      type: 'input',
      message: 'Enter new employee last name'
    },
    {
      name: 'role_id',
      type: 'list',
      message: 'Select new employees role',
      choices: roleChoices
    },
  ]).then(function(answers) {
    db.query('INSERT INTO employee SET ?', {
      first_name: answers.first_name,
      last_name: answers.last_name,
      role_id: answers.role_id,
    });
    console.table(answers);
    startQuestions();
  })
})
}
startQuestions();

function finished() {
  console.log('All done');
  process.exit();
};







