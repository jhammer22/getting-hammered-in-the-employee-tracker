INSERT INTO  department (id, department_name)
VALUES (1, "Manager"),
       (2, "Sales"),
       (3, "Assistant Manager"),
       (4, "Accounting"),
       (5, "Quality Control");

INSERT INTO  role (role_id, title, salary, department_id)
VALUES ( , "Regional Manager", 150000, ),
       ( , "Sales III", 100000, ),
       ( , "Assistant to the Regional Manager", 125000, ),
       ( , "Accountant II", 75000, ),
       ( , "Lead Quality Control", 65000,);


INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (, "Michael", "Scott" ),
       (, "Jim", "Halpert"),
       (, "Dwight", "Shrute"),
       (, "Kevin", "Malone"),
       (, "Creed", "Bratton");