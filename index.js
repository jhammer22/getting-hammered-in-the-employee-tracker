const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to db
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username
    user: '',
  // MySQL password
    password: '',
    database: 'employee_db';
  },
  console.log(`database connected use with care`)
);





// default response for request not found
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`running the server is port ${PORT} is what you seek`)
});