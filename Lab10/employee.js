export default class Employee {
    constructor(_firstName, _lastName, _age, _salary) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.salary = _salary;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

export let departments = ["IT", "HR", "Finance", "Sales"];