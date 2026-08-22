let employees = [];

export function addEmployees(...newEmployees) {
    for (let i = 0; i < newEmployees.length; i++) {
        employees.push(newEmployees[i]);
    }
}

export function findEmployee(name) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].getFullName() == name) {
            return employees[i];
        }
    }
}

export function increaseSalary(name, amount) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].getFullName() == name) {
            employees[i].salary += amount;
        }
    }
}

export { employees };