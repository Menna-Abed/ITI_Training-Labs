import Employee, { departments } from "./employee.js";

import {
    employees,
    addEmployees,
    findEmployee,
    increaseSalary
} from "./employeeOps.js";

let emp1 = new Employee("Ahmed", "Ali", 30, 5000);
let emp2 = new Employee("Sara", "Hassan", 25, 6000);
let emp3 = new Employee("Omar", "Mostafa", 28, 5500);

addEmployees(emp1, emp2, emp3);

increaseSalary("Ahmed Ali", 1000);

for (let i = 0; i < employees.length; i++) {
    document.body.innerHTML +=
        employees[i].getFullName() +
        " - Age: " +
        employees[i].age +
        " - Salary: " +
        employees[i].salary +
        "<br>";
}