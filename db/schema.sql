DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE ROLE (
  role_id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (role_id)
  FOREIGN KEY department (id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

CREATE TABLE employee (
  employee_id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT NOT NULL AUTO_INCREMENT,
  manager_id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (employee_id)
  FOREIGN KEY (role_id)
  REFERENCES role (id)
  ON DELETE SET NULL
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
  ON DELETE SET NULL
);
