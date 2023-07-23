// class
class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleName: string,
        public lastName: string
    ) {
        this.fullName = `${firstName} ${middleName} ${lastName}`;
    }
}

// Person interface
interface Person {
    firstName: string;
    lastName: string
}

// function with string type arg
function greeter(p : Person) {
    return `Hello, ${p.firstName} ${p.lastName}`;
}

let user : Person = {
    firstName: "Jane",
    lastName:  "User"
};
let user2 = new Student("Jane", "M", "User");

// document.body.textContent = greeter(user);
document.body.textContent = greeter(user2);