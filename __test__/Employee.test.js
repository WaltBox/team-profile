const { exportAllDeclaration } = require("@babel/types");
const Employee = require("../lib/Employee");

test("Initialize Employee Object", () => {
    const x = new Employee();
    expect(typeof(x)).toBe("object")
});

test("create name with obj argument", () => {
    const name = "Walt"
    const x = new Employee(name);
    expect(x.name).toBe(name)
})

test("create id with obj argument", () => {
    const id = 1
    const x = new Employee("Walt", id);
    expect(x.id).toBe(id)
})

test("get name with getName()", () => {
    const name = "Walt"
    const x = new Employee(name);
    console.log(x.getName())
    expect(x.getName()).toBe(name)
})

test("get email with obj argument()", () => {
    const email = "waltboxwell@gmail.com"
    const x = new Employee("Walt", 1, email);
    expect(x.email).toBe(email)
})

/*test("get rol employee", () => {
    const role = "employee"
*/