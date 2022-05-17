const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return "Manager"
    }
}

// const employeeA = new Employee("Walt", "1", "walt@gmail.com")
// const employeeB = new Employee("Trinh", "2", "tring@gmail.com")
// employeeA.getName();
module.exports = Manager;