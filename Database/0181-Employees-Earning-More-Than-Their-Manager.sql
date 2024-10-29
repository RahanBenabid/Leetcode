SELECT E2.name
FROM Employee E1, Employee E2
Where E1.id = E2.managerId and E1.salary < E2.salary