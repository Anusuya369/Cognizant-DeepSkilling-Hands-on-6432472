-- PL/SQL
-- Stored Procedures
-- Exercise 2

-- Employee Information

SET SERVEROUTPUT ON;

CREATE TABLE employees (
    emp_id NUMBER PRIMARY KEY,
    name VARCHAR2(100),
    salary NUMBER
);

INSERT INTO employees VALUES (105, 'virat', 50000);
INSERT INTO employees VALUES (106, 'dhoni', 60000);
INSERT INTO employees VALUES (107, 'rohit', 70000);
COMMIT;

CREATE OR REPLACE PROCEDURE GetEmployeeDetails(p_emp_id IN NUMBER) AS
    v_name   VARCHAR2(100);
    v_salary NUMBER;
BEGIN
    SELECT name, salary
    INTO v_name, v_salary
    FROM employees
    WHERE emp_id = p_emp_id;

    DBMS_OUTPUT.PUT_LINE('Employee Name: ' || v_name);
    DBMS_OUTPUT.PUT_LINE('Salary: ' || v_salary);
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('No employee found with ID: ' || p_emp_id);
END;
/

BEGIN
    GetEmployeeDetails(105);  
END;
/