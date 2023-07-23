// similar to some method
// return true if every element 

const every = (array, test) => {
    for(let i of array) {
        if(!test(i)) return false;
    }
    return true;
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));
