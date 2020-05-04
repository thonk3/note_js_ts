

// array methods
// https://codesource.io/javascript-array-methods-includes-indexof-join/

const arr = ["one", "two", "three", "four", "five"];

// includes() -> boolean
// check if array contains
console.log(
    arr.includes('a') + '\n' +
    arr.includes('one') + '\n'
);

// indexOf() -> int
// return index of item
console.log(
    arr.indexOf('a') + '\n' +
    arr.indexOf('two') + '\n' +
    arr.indexOf('THREE'.toLowerCase()) + '\n'
);

// join(seperator) -> string
// convert array into string
console.log(arr.join(" - "));
