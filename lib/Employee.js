class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    getName () {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return "Employee";
    }
}

// const employeeA = new Employee("Walt", "1", "walt@gmail.com")
// const employeeB = new Employee("Trinh", "2", "tring@gmail.com")
// employeeA.getName();
module.exports = Employee;