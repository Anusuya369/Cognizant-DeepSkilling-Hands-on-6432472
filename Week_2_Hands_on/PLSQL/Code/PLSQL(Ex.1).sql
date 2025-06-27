-- PL/SQL
-- Control Structures 
--Exercise 1

--1.IF...ELSIF...ELSE Statements (Grade checker)
DECLARE
  marks NUMBER := 82;
BEGIN
  IF marks >= 90 THEN
    DBMS_OUTPUT.PUT_LINE('Grade: A');
  ELSIF marks >= 75 THEN
    DBMS_OUTPUT.PUT_LINE('Grade: B');
  ELSIF marks >= 60 THEN
    DBMS_OUTPUT.PUT_LINE('Grade: C');
  ELSE
    DBMS_OUTPUT.PUT_LINE('Grade: F');
  END IF;
END;
/

--2. CASE Statement (Day Name)
DECLARE
  day_number NUMBER := 3;
BEGIN
  CASE day_number
    WHEN 1 THEN DBMS_OUTPUT.PUT_LINE('Sunday');
    WHEN 2 THEN DBMS_OUTPUT.PUT_LINE('Monday');
    WHEN 3 THEN DBMS_OUTPUT.PUT_LINE('Tuesday');
    WHEN 4 THEN DBMS_OUTPUT.PUT_LINE('Wednesday');
    WHEN 5 THEN DBMS_OUTPUT.PUT_LINE('Thursday');
    WHEN 6 THEN DBMS_OUTPUT.PUT_LINE('Friday');
    WHEN 7 THEN DBMS_OUTPUT.PUT_LINE('Saturday');
    ELSE DBMS_OUTPUT.PUT_LINE('Invalid Day');
  END CASE;
END;
/

--3.FOR and WHILE LOOP (Odd/Even)
DECLARE
  i NUMBER;
  j NUMBER;
BEGIN
  FOR i IN 1..5 LOOP
    IF MOD(i, 2) = 0 THEN
      DBMS_OUTPUT.PUT_LINE(i || ' is even');
    ELSE
      DBMS_OUTPUT.PUT_LINE(i || ' is odd');
    END IF;

    j := 1;
    WHILE j <= i LOOP
      DBMS_OUTPUT.PUT('*');  
      j := j + 1;
    END LOOP;

    DBMS_OUTPUT.PUT_LINE('');  
  END LOOP;
END;
/