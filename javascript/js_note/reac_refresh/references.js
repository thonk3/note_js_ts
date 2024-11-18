// sample of references in js

// objects are reference
const person = {
  name: "max",
};

// this will be a reference to person
const secPerson = person;
console.log(secPerson.name); // max
person.name = "cheese";
console.log(secPerson.name); // cheese

// name changed since secPerson will referenced person
// to make a copy of the object

// use the spread operator
const copy = { ...person };
