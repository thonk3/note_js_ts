const Test = require('./test')

// ----------------------------------------------
const fun = (arr, func) => {
    let x = undefined;
    arr.some(i => {
        x = (func(i) ? i : undefined);
        return(func(i))
    })
    return x;
}

// ----------------------------------------------

const testCases = [
    { inp: [ [1, 3, 5, 8, 9, 10], num => num % 2 === 0 ], res: 8 },
    { inp: [ [1, 3, 5, 9], num => num % 2 === 0 ], res: undefined },
]

// run test
Test.assertAllMulti(testCases, fun);