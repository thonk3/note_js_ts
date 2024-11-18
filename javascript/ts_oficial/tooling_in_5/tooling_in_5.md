# Tooling in 5 Min

Quick start TS

[source](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html)

## Installing

- quick and easy via npm

---

## 1. Building first TS file

start with simple ts code in `greeter.js`

```ts
function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";
document.body.textContent = greeter(user);
```

## 2. compiling code

This code so far is just plain js with in a ts file with the `.ts` extension

To run via cli 
```shell
tsc greeter.ts
```
this creates `greeter.js` containing the same JS in it, now we can try adding `string` type annotation to the function args

## 3. Type annotation

**Type Annotation** in ts are light weight ways to record the intended contract of the function or variable.
This case, the `greeter` function to be called with a single string param

changing this into a different type when calling will cause the compiler to **throw an error**

removing the arg in the definition will also throw an error within the compiler output

## 4. Interfaces

> ok **interfaces**

These describes objects with what field should be contains in it

Add the `Person` interface into `greeting.js`, and pass that as the argument for the `greeter` function

```ts
interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };
document.body.textContent = greeter(user);
```

in TS, two types are compatible if their internal structure is compatible.
> this allows interfaces to be implemented just by having the shape the interface requires with out explicit `implements` clause

now what is the `implements` clause

## 5. Classes

final extending the sample to using classes.
**TS supports class-based oop**

Creating a `Student` class with a constructor and public fields.
notice that the `Student` class and `Person` interface plays well together, letting you decide the level of abstraction

```ts
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
```

the generated js code form this is pretty much similar to what we wrote in TS

> Classes in TS are just a short hand for the same prop based OO that is frequently used in JS

OK Notes
- the function arg while set to only take in interface obj,
  - Student is close enough with the Person interface so its OK
  - two objects with similar internals
    - objects with fistName / lastName string

## 6. Running TS webapp

simple way to run this is to add the script in html then running it 

```html
<!DOCTYPE html>
<html>
    <head>
        <title>TypeScript Greeter</title>
    </head>
    <body>
        <script src="greeter.js"></script>
    </body>
</html>
```

### Optional 

Open the ts file in visual studio, hover and see the types of stuff

Intellisense things
