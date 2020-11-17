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

