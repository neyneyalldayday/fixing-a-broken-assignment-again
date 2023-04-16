INSERT INTO department (name)
VALUES ('Legal'),
    ('Sales'),
    ('Engineering');

INSERT INTO roles (title, salary, department_id)
VALUES ('Legal Team Lead', 250000, 1),
    ('Lawyer', 170000, 1),
    ('Sales Lead', 100000, 2),
    ('Salesperson', 70000, 2),
    ('Lead Engineer', 150000, 3),
    ('Engineer', 120000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id, manager_confirm)
VALUES ('Michael', 'Huang', 1, null, true),
    ('Michael', 'Rader', 2, 1, false),
    ('Emma', 'Daily', 2, 1, false),
    ('Patricia', 'Alberto', 3, null, true),
    ('Bryan', 'Swarthout', 4, 2, false),
    ('Shawn', 'Tschoepe', 4, 2, false),
    ('Ben', 'Medina', 4, 2, false),
    ('Bobby', 'Kajenski', 5, null, true),
    ('Tyler', 'Kim', 6, 3, false),
    ('Evan', 'Timmerman', 6, 3, false);

INSERT INTO manager (first_name, last_name)

SELECT first_name, last_name
FROM employee
WHERE manager_confirm = 1;