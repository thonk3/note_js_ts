const Test = require('./test')

// ----------------------------------------------
// code works but testing code not working
const fun = arr => {
    console.log(arr)
    let sum = 0,
        min = Math.min(...arr),
        max = Math.max(...arr);

    for (let i = min; i <= max; i++)
        sum = sum + i;
    
    return sum;
}

// ----------------------------------------------

const testCases = [
    { inp: -30, res: -22 },
    { inp: [1, 4] , res: 10 },
    { inp: [4, 1] , res: 10 },
    { inp: [5, 10] , res: 45 },
    { inp: [10, 5] , res: 45 },
]

// run test
Test.assertArrAll(testCases, fun);


// console.log(fun([1,4]))

