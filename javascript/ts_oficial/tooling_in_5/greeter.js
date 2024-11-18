// class
var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = "".concat(firstName, " ").concat(middleName, " ").concat(lastName);
    }
    return Student;
}());
// function with string type arg
function greeter(p) {
    return "Hello, ".concat(p.firstName, " ").concat(p.lastName);
}
var user = {
    firstName: "Jane",
    lastName: "User"
};
var user2 = new Student("Jane", "M", "User");
// document.body.textContent = greeter(user);
document.body.textContent = greeter(user2);
