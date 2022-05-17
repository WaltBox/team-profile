const { exportAllDeclaration } = require("@babel/types");
const { default: TestRunner } = require("jest-runner");
const { getMaxListeners } = require("process");
const Manager = require("../lib/Manager");

test("Initialize manager object", () => {
    const manager = new Manager('Walt', 1, "waltboxwell@gmail.com")
})

test(" get office number from manager object", () => {
    const officeNumber = 123
    const x = new Manager("Walt", 1, "waltboxwell@gmail.com", 123);
    expect(x.officeNumber).toBe(officeNumber)
})

test(" get the role of employee", () => {
    const manager = new Manager("Walt", 1, "waltboxwell@gmail.com", 123);
    console.log(manager.getRole())
    expect(manager.getRole()).toBe("Manager");
})