USE employee_db;

INSERT INTO  department (id, department_name)
VALUES ("Manager"),
       ("Sales"),
       ("Assistant Manager"),
       ("Accounting"),
       ("Quality Control");

INSERT INTO  role (role_id, title, salary, department_id)
VALUES (01, "Regional Manager", 150000),
       (02, "Sales III", 100000),
       (03, "Assistant to the Regional Manager", 125000),
       (04, "Accountant II", 75000),
       (05, "Lead Quality Control", 65000);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Scott", 01,),
       ("Jim", "Halpert", 02,),
       ("Dwight", "Shrute", 03,),
       ("Kevin", "Malone", 04,),
       ("Creed", "Bratton", 05,);