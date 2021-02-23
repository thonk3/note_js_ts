# ch05 Higher order functions

on a brief look this looks interesting

- key points
- abstraction to reduce bugs
- abstract operations to reduce errors 

## abstraction

- abstraction hide details and let you tackle the task at a higher/ more abstract level
- abstract certain task to make the code more readable

## abstracting repitition

- so this show some thing cool
- so a classic way to abstract something is to put it in a function for instance a for loop

```js
function repeatLog(n) {
    for(let i = 0; i < n; i++) {
       console.log(i);
    }
}
```

- so instead of printing things a couple time, it a function can be passed into the function

```js
// since a function can be binded into a value
// it can be passed in just like a value 
function repeat ( n, action ) {
    for(let i = 0; i < n; i++) {
        action(i);
    }
}

// repeat(3, console.log);
```

- or pass in an anonymous value

```js
let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i})`);
});

clg(labels);
// ["Unit 1", "Unit 2", ...]
```
## higher order functions

- these are functions **operating** into other other functions as arguments or returned as value.
- term comes from maths
- higher order functions allow `abstraction over actions`

`example` function that can creates new functions

```js
function greaterThan(n) {
    return m => m > n;
}

// these are the same
let gt = greaterThan(10)(11);
console.log(gt);
// true

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// true;
```

`example` function that **change** other functions

```js
function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("calling with", args, ", returned", result);

        return result;
    }
}

noisy(Math.min)(3,2,1);
// turn to
// return function x(3,2,1) // (...args)
// clg(calling with args)
// let result = Math.min(args)
// ...
```

`example` write functions providing new types of control flow

```js
function useless(test, then) {
    if(!test) then();
}

repeat(3, n => {
    unless(n%2 === 1, () => {
        console.log(n, "is even");
    })
});
// repeat 3, 2, 1
```

some example of high order functions are the `Array` functions `forEach`, `filter`, `map`...

## script data set

- the heck writing systems/ scripts (latin, cyrillic, unicode, ...)
- oh this is for languages with special non-alphabet characters 

> ok so this is the scenario to do exercises on
>
> these scripts are in formatted as `json`

## `filter`

- this part creates a function taking in `(array, filter)` and returns a new array that passes the filter

```js
function filter( array, test ) {
    let passed = [];
    for (let elem of array) {
        if(test(elem)) passed.push(elem);
    }

    return passed;
}

filter(SCRIPTS, script => script.living);
```

- the arg `test` would be a function to decide which elem to collect
- this a `pure` function, it does not modify the arguments

> OK whats the point of this part if they tell you to use filter anyways?
>
> is this the definition of `Array.prototype.filter()` ??

### `map`

- we use map to change the form of the collection.
- `map` transform the array by applying a function to each elements to build a new array from the returned value
- the new array will have the same length but different content

```js
function map ( array, transform ) {
    let mapped = [];
    for ( let elem of array ) {
        mapped.push(transform(elem));
    }

    return mapped;
}
```

### `reduce`

- this is to compute a single value from a collection
- or *summarizing*:
  - summing a collection of numbers
  - finding the script with the most chars??
- this works by taking a single elem from the array and combining it with the current value. with a starting value

```js
function reduce( arr, combine, start ) {
    let current = start;
    for(let el of array) {
        current = combine(current, el);
    }

    return elem;
}   // alright this makes reduce seems better

reduce([1, 2, 3], (a, b) => a+b, 0);
```

so to reduce the SCRIPT twice to find the most characters this could be used

```js
function charCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
    return charCount(a) < charCount(b) ? b : a;
}));
```

- `charCount` reduce the `ranges` assigned in the object by reducing their size
- the second call go through the whole array and keep comparing to see what is the larger one

> HMMMMMMMMMMMmm

## composability

consider the previous code, the code without using higher-order function is not that much worse

```js
let bigger = null;
for(let sc of SCRIPTS) {
    if (bigger == null || charCount(biggest) < charCount(sc)) {
        bigger = script;
    }
}

clg(biggest);
```

higher order function works best when you need to `compose` operations.

`example` find the avg year of origin for living and dead scripts in the data set.

```js
function average(arr) {
    return arr.reduce((a,b) => a+b) / arr.length;
}

console.log(Math.round(average(
    SCRIPTS.filter(s => s.living).map(s => s.year)
)));    // 1165

console.log(Math.round(average(
    SCRIPTS.filter(s => !s.living).map(s => s.year)
)));    // 204
```

this can also definitely be done in one big loop

```js
let total = 0, count = 0;
for(let sc of SCRIPTS) {
    if(sc.living) {
        total += sc.year;
        count++;
    }
}

console.log(Math.round(total/ count));
```

- to some people this way might be harder to tell what is going on.
- BUT it will be harder to separate `average` into its own function
- under the hood, the 2 different set of code operates differently.
- Its up to the coder to decide which way is better
- do you sacrifice readability for computation complexity or speed

## strings and character codes

- continuing with using the scripts, another use is determining which script a text is using.
- we could use the character code defined in a script code range to find that out

```js
function charScript(code) {
    for(let sc of SCRIPTS) {
        if(sc.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }

    return null;    // code not in anything
}
```

- `some()` is another higher order function, it takes a *test* function and return true for any of the elements in the array

- something `charCodeAt(0)` and `codePointAt(0)`

## recognizing text

- so the `characterScript` correctly loops over characters
- next step is count the number of char belong to each scripts

```js
// this abstraction could be useful
function countBy(items, groupName) {
    let counts = [];
    for(let it of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);

        if(known == -1)
            counts.push({ name, count: 1 });
        else
            counts[known].count++;
    }

    return counts;
}
```

- this go through a collection that computes the group name of each element and return the array of the count if the element belongs to a group
- it uses `findIndex`, similar to `indexOf`, which return the index of the passed in value

using `countBy` we can tell which the count of which script used in a piece of text

```js
function textScripts(text) {
    let scripts = countBy(text, char => {
        let scr = characterScript(char.codePointAt(0));
        return scr ? scr.name : "none";
    }).filter(({name}) => name != "none");

    let total = scripts.reduce((n, {count}) => n+count, 0);
    if(total === 0) return "None found";

    return scripts.map(({name, count}) => {
        return `${Math.round(count*100/total)}% ${name}`;
    }).join(", ");
}

---

# new stuff

# exercise

- [flattening](./flat.js)
- [your own loop](./loopies.js)
- [everything](./everything.js)
- [writing direction](./wr_direction.js)