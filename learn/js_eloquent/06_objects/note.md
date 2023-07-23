# OBJECTS

OHNO ITS OOP TIME

## encapsulation

- the core idea is dividing programs into smaller pieces
- so each part can be easily changed without affecting other parts of the software
- different piece of that program interact with each other through `interface`s
  - a more abstracted set of function/bindings to hide their implementation
- although all js props are `public`, `_` are often prepended onto props to hide them
  
> encapsulation is seperating interface from implementation

## methods

- these are props holding functions
- alright [rabbit](./rabit.js) shows a different way of assigning function into object
  - js object also has `call()` which take `this` as first arg and treats others as normal params
- each function has its own `this` binding, the value depends on how its called.
  - cant refer to `this` of the wrapping scope in a regular function defined with `function`
- **ARROW FUNCTIONS** are different
  - cant bind `this` but can see `this` bindng of the scope arond them
```js
// hmm what is this
function normalize() {
  console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0, 2, 3], length: 5});
// → [0, 0.4, 0.6]

// this doesnt not work with function
```

## prototypes


