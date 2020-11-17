# ch03 functions

## function definition

- function derfinition is a regular binding where the binding val is a afunc
    ```js
    const sq = function(x) {
        return x*x;
    }

    const sq = (x) => x*x;
    ```
- you know about parameters
- you know about return
- if a function doesnt have a return statement, it returns `undefinded`

## bindings and scope

- you know what scopes are, the pars of a program where some bindings are visible
- local bindings/global bindings
- ok so here come `let` v `var` bindings
  - `let` only creates bindings for the local scope
  - `var` creates global bindings

OK correction on `var` and `let`

- `var` is function scoped
  - will be declared throughout the whole program
  - value is only assined after
- `let` blocked scoped
  - not declared throughout

```js
// var
console.log(x);
var x = 3;
console.log(x);
// undefined
// 3

// let
console.log(x);
let x = 3;
console.log(x);
// error
```

### nested scope

- scope inside a scope no problem
- their provided example is pretty cool

```js
// recipe thing
const hummus = factor => {
    const ingr = (amount, unit, name) => {
        let amt = amount * factor;
        if(amt > 1) unit += "s";
        console.log(`${amt} ${unit} ${name}`);
    }

    ingr(1, "can", "chickpeas");
    // ... other ingredients
    // ... can chuck this in an arr and loop it
}
```

> lexical scoping

## function as values

- ok so if functions are declared with `let`
- it can be re-assigned with a new value

> iffy with the wording on this

## declaration notation

so just a short way of declaring a function binding

```js
function a() {}
// same as
let a = function() {}
// or
let a = () => {};
```

## call stack

- the **call stack** is the stack of context of the location of what functions are called
  - when called, the context is stored on top **stack FILO**
  - its possible for the stack to be too big and fail
  - `out of stack space` or `too much recursion`

## optional args

- it doesnt matter how many args the function is declared with
- js can accepts less/more args
  - more: ignore the additional args
  - less: default value or `undefined`

```js
function minus(a, b) {
    if (b === undefined) return -a;
    return a - bl
}
```

to set default value, assign the parameter with a value

```js
function power(base, ex = 2) {
    let res = 1;

    for(let i = 0; i < ex; i++) {
        res *= base;
    }

    return res;
}
```

## closure

- can set a function call as a value and assign to a binding
- **closure**
  - reference specific instance of a local binding in an enclosing scope

ok what the hell is this 

```js
function multi(fac) {
    return num => num * fac;
}

let twice = multi(2);
console.log(twice(5));
// 10

// does this mean
let twice = num => num * 2;
```

- think of functions values as containing both the code in their body and the environment where theyre created
- at called, the body

## recursion

function calling itself

```js
function pow(base, exp) {
    if(exp === 0) return 1;
    else return base * pow(base, exp -1);
}
```

- this implementation is 3x slower than a regular loop because of js.

> what the fuck is the function in [aa.js](./aa.js)

## growing functions

- just breaking up functions for DRY
- each smaller function should be specific for its purpose
- try not to comflate multiple different actions

## functions and side effects

- function can be roughly seperate to those called for the **side effects** and those called for the **return value**
  - is possible to do both
- often, the func that **returns value** is more easier to use many ways

**pure functions** are
- doesnt produce side effects
- doesnt rely on other side effects
- when called with the same args, always produce same value

--- 
# summary

pretty disapointing that this took too long for me to go through

but lets just do the exercises

- [min](./min.js)
- [recur](./recur.js)
- [bean counting](./bean.js)

