# OOP in js

seems like simle object stuff

day 1
- basic object
- dot notation
- method in obj
- this keyword
- constructor function
  - just a function definition
  - using this to define properties

day 2
- using const to create objects (`new`)
- extend constructors to recieve args
- verify object constructors with `instanceof`
  - check if object is an instance of a constructor function
- understand own properties
- use prototype props to reduce duplicate code
- iterate over all props

day 3
- constructor prop
- change prototype to new object
- rememeber to set constructor prop when changing prototype
- where the property of the object comes from
- understanding prototype chain
  - similar to `hasOwnProperty`
  - using `isPrototypeOf` to check what the object is an instance of

day 4
- use inheritance for DRY (cant really see inheritance here)
- inheriting properties from supertype (follow up from above)
  - doesnt seem like inheritance but just creating an object.
- set child prototype to instance of parent
  - using the method previous this is actually making a class function inheriting from a parent class
  ```js
  function Parent() {}
  Parent.prototype = {
    constructor: Parent,
    talk: () => console.log("Hello world"),
  }

  // ---------------
  function Child() {}
  Child.prototype = Object.create(Parent.prototype);
  let childObj = new Child();
  ```
- reset inherited constructor prop
  - Child classes will also inherit the constructor of parent
  - this needs to be reassigned
- adding methods after inheritance

day 5
- overiding inherited method, simple just reassign the method
- using `mixin` to add common behavior between unrelated msg
- private variables, define the variables using `let` and access it with getters and setters
- what is Immediately Invoked Function Expression (IIFE)
- using IIFE to create a module











