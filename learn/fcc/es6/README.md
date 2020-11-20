# fcc es6 module

yep works the same way as [basicjs](../basicjs/README.md), list the content I go through, note down new stuff

- `let` v `var` keyword
  - `let` is introduced in **es6** to prevent error in re-declaring variables
- scopes of `var` v `let`
  - [test scoping](test_scope.js)
- `const` constants
  - have the same properties as `let` but its a constant instead
- mutate `const` array
  - so its a good idea to declare vars using `const` unless the var needs to be re-assigned
  - objects (arr, functions) are still mutable when declared with `const`
  - `s[1] = 3;` is ok
- preventing object mutation with `Object.freeze(obj)`
  ```js
  let obj = { name: "fcc" };
  Object.freeze(obj);
  ```
- 
