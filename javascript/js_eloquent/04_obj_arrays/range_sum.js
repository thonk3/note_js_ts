// rewrite

// range funtion
// 2 args start and end
// -> an array containg all numbers from start to end (inclusive)

const range = (start, end) => {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }

    return arr;
}

// console.log(range(3,5));

// sum function
// takes array
// -> return sum of number
const sum = (arr) => {
    let x = 0;
    for(let i = 0; i <= arr.length; i++)
        x += i;
    
    return x;
}

console.log(sum(range(1, 10)));
// -> 55
