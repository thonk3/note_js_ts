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

## something

> im not sure if this part is still related anymore.
> it seems like its showing what objects can achieve

- so this part will try to measure correlation:
  - a measure of dependencies between statistical variables
  - correlation between variables expressed between `-1 -> 1`
  - 0 means not related, 1 pefect relation
- to compute corellation between 2 bools, use phi coefficient formula
- input a frequency table containing the number of times different combination of variables are observed

> ok so the scary looking formula is not so scary afteral.
> it is just there to work with javascript

