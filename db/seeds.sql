USE employee_db;

INSERT INTO  department (name)
VALUES ("Manager"),
       ("Sales"),
       ("Assistant Manager"),
       ("Accounting"),
       ("Quality Control");

INSERT INTO  role (title, salary, department_id)
VALUES ("Manager", 150000, 1),
       ("Sales III", 100000, 2),
       ("Regional Manager", 125000, 3),
       ("Accountant II", 75000, 4),
       ("Lead Quality Control", 65000, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Scott", 1, NULL),
       ("Jim", "Halpert", 2, 1),
       ("Dwight", "Shrute", 3, 1),
       ("Kevin", "Malone", 4, 1),
       ("Creed", "Bratton", 5, 1);