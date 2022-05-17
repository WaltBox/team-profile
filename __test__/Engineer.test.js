const { exportAllDeclaration } = require("@babel/types");
const { default: TestRunner } = require("jest-runner");
const { getMaxListeners } = require("process");
const Engineer = require("../lib/Engineer");

test("Initialize engineer object", () => {
    const engineer = new Engineer('Walt', 1, "waltboxwell@gmail.com")
})

test("get github username", () => {
    const github = 'waltbox'
    const x = new Engineer("Walt", 1, "waltboxwell@gmail.com", 'waltbox');
    expect(x.getGithub()).toBe(github);
})

test("get role of employee", () => {
    const engineer = new Engineer("Walt", 1, "waltboxwell@gmail.com", 'waltbox');
    console.log(engineer.getRole())
    expect(engineer.getRole()).toBe("Engineer");
})