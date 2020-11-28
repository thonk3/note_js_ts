# fcc es6 module

yep works the same way as [basicjs](../basicjs/README.md), list the content I go through, note down new stuff

day 14
- `let` v `var` keyword
  - `let` is introduced in **es6** to prevent error in re-declaring variables
- scopes of `var` v `let` [test scoping](test_scope.js)
- `const` constants
  - have the same properties as `let` but its a constant instead
- mutate `const` array
  - so its a good idea to declare vars using `const` unless the var needs to be re-assigned
  - objects (arr, functions) are still mutable when declared with `const`
  - `s[1] = 3;` is ok

day 15
- preventing object mutation with `Object.freeze(obj)`
  ```js
  let obj = { name: "fcc" };
  Object.freeze(obj);
  ```
- use arrow functions as annonymous functions
- default parameters
- use `rest` operator
  - this is to group up function arguments into an array variable
  - [rest operator must be the last formal param](rest.js)

day 16
- `spread` operator
-  use `destructor` to get values from object
-  use `destructor` to assign variables
-  use `destructor` to assign object variables
-  `desstructor` for arrays

day 17
- `destructure` with `rest`
- `destructure` object in a function parameter
- string litterals template
- shorthand object
- functions shorthand for object

day 18


day 19
- `import *`