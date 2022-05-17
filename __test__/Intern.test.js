const { exportAllDeclaration } = require("@babel/types");
const { default: TestRunner } = require("jest-runner");
const { getMaxListeners } = require("process");
const Intern = require("../lib/Intern");

test("Initialize intern object", () => {
    const intern = new Intern('Walt', 1, 'waltboxwell@gmail.com')
})

test(" Get school from intern object", () => {
    const school = 'University of Texas'
    const x = new Intern("Walt", 1, "waltboxwell@gmail.com", "University of Texas");
    console.log(school)
    expect(x.school).toBe(school)
})

test("Get role of employee", () => {
    const intern = new Intern("Walt", 1, "waltboxwell@gmail.com", "University of Texas");
    expect(intern.getRole()).toBe("Intern")
})