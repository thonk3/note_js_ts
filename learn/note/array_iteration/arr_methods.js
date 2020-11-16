

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
    arr.indexOf('a') + '\n' +                   // doesnt exist
    arr.indexOf('two') + '\n' +                 // index 1
    arr.indexOf('THREE'.toLowerCase()) + '\n'   // index 2
);

// join(seperator) -> string
// convert array into string seperated by the probided seperator
console.log(arr.join(" - "));
