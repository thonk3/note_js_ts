# data structures objects and arrays

this chapter introduces basic data structures ( arrays and objects )

## data sets or arrays

- **arrays** store a sequence of data, can be mixed types
- each element can be accessed using bracket notation with its indexed number

### properites

- so this explain expressions such as `str.length`
- these expression access a property of a value value, think of these as private fields of a class
- can be accessed with both `dot` and `bracket` notation

### methods

- so properties not only hold values, but also functions
- examples arrays have
  - `push()` to add new element into the back of the array
  - `pop()` to remove the last element of the array

> array functions resembles a **stack** data structure

## objects

- **objecs** are a collection of different properties and are created by using bracket notation `{}`
- each prop is seperated using a comma
- reading an object's prop that doesnt exist returns `undefined`
- call the unary operator `delete` to remove the prop from the object
  - `delete obj.prop`
- to check if that prop exist in the object theres 2 method:
  - `prop.hasOwnProperty(prop)`
  - `"prop" in object`
  - these will both returns a `boolean` to show if the prop exist
- to list all props of an object use:
  - `Object.keys(object)`
  - this returns an array of strings containing the names of the props

> [some props in action](./object_methods.js)

## mutability

- technically most js data types are all **imutable**, you are reassinging them with new values
- it is different with objects, 2 objects can have the same value, **BUT** they are of different references

> this be pointer time??

```js 
// look at this 
let ob1 = { val: 10 };
let ob3 = { val: 10 };
let object = ob1;

// short for console.log
clg(ob1 === 3)          // false
clg(ob1 === object)     // true

// changing val
ob1.val = 3;
clg(object)             // 3
clg(ob3);               // 10
```

- `ob1` and `object` are binded to the same object, hence they are refered to the same value when it is changed.
- even if the object is a `cost` its props can still be changed
```js
const score = { vis: 3, home: 0 };
score.vis = 5;                      // this works
score = { vis: 3, home: 5 };        // reassigning const doesnt work
```

--- 

## something using js

> im not sure if this part is still related anymore.
> it seems like its showing what objects can achieve

- so this part will try to measure correlation:
  - a measure of dependencies between statistical variables
  - correlation between variables expressed between `-1 -> 1`
  - 0 means not related, 1 pefect relation
- to compute correlation between 2 bools, use phi coefficient formula
- input a frequency table containing the number of times different combination of variables are observed

> ok so the scary looking formula is not so scary afteral.
> it is just there to work with javascript

### computing correlation

so depending on how the data from the parameters is represented
- either as an 4 elem array
- or a 2d array representing the table

since its a 2x2 table, this following solution view the parameter as a 4 elem array. and interpret the index as binary

```js
// phi coefficient equation on table
function phi (tb) {
  let top = tb[3] * tb[0] + tb[2] + tb[1];
  let bottom = Math.sqrt(
    (tb[2] + tb[3]) *
    (tb[0] + tb[1]) *
    (tb[1] + tb[3]) *
    (tb[0] + tb[2]) *
  );

  return top / bottom;
}

// out
console.log(phi([76, 9, 4, 1]));
// 0.068599434
```

the `phi correlation` formula is only a part of the solution. the table needs to be created from a dataset aggregating a specific **action**
- ok so heres the [dataset](https://eloquentjavascript.net/code/journal.js)
- heres the function to create the table for an activity

```js
function getTable(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;

    if (entry.events.includes(event)) index+=1;
    if (entry.squirrel) index+=2;

    table[index]+=1;
  }

  return table;
}
```

- this uses the `includes()` to check if a value exist in the array
- so now we need a way to create a function that loops through all the actions from the dataset

### array loops

- this part talks about 2 ways of looping through a list
  - normal for loop
  - for each (for of) loops
  ```js
  for (let item of list) { 
    console.log(`${item}`); 
  }
  ```

### final task

- so now we will need a way to get a list of events recorded in the journal, with out having duplicates

```js
function journalEvents(journal) {
  let unique = [];
  for (let entry of journal) {
    for(let event of entry.events)
      if(!unique.includes(event))
        unique.push(event);
  }

  return unique;
}
```

- this would return the list of unique events recorded in the journal
- now we can combine our functions (`phi`, `getTable` and `journalEvents`)
- additionally there are some correlation which are close to 0, so we could effectively remove them as its a lower probability

heres the [code at this point](./is_it_final.js)

- ok so whule this only show corrolation for each individual activities, what about its combinations
- think about it
  

## More arrays

> recapping on array methods (rememer the nameing is related to stack)
> - `push` add to last
> - `pop` remove last

introducing
- `shift` remove from start
- `unshift` add to start

> the name of these 2 related to queues

searching for a specific value use 
- `indexOf` get the index of the first matching value
- `lastIndexOf` get index of the last matching value

to cut and add
- use `slice` like strings
- use `concat` to add 2 arrays

```js
// example function to remove a specific element by index
const remobe = (arr, i) => {
  return arr.slice(0, i).concat(arr.slice(index + 1));
}
```

## string **properties**

ok some nuances??
- again values are immutable and can only be reassigned
- **cannot add** new props into native data type
- some methods you know
  - `slice`, `indexOf`
  - `trim`, `padStart`
  - `split`, `join`, `repeat`

simple

## REST / SPREAD

oh finally so I understand that for `...`
- js function can accept any number of args with the help of the `rest` operator in the parameters area
- this will bound all remaining values into an `array` parameter.
  - any other params before that are not addded

OK so when the operator is used **AS** a parameter,
- it **spreads** out arrays or object props into the function call

## `Math` object

oh this is talking about the `Math` object used to do "adv" mathematical operations
- what special is it provides a `namespace` for these methods. and as the methods contain simple english
- this safely seperate the binding names from your own bindings













