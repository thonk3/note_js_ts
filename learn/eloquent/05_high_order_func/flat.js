// use reduce and concat
// flaten the array into a single array
// containing all elements of the original array

let arr = [[1, 2, 3], [4, 5], [6]];

const flat = ar => {
    return arr.reduce((a,b) => a.concat(b), []);
}

console.log(arr);
console.log(flat(arr));