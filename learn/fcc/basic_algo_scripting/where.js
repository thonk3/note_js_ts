const Test = require('./test')

// ----------------------------------------------
const fun = (arr, num) => {
    if (arr.length === 0) return 0;
    arr = arr.sort((a, b) => a > b);

    for (let i = 0; i < arr.length; i++)
        if (arr[i] >= num) return i;

    return arr.length;
}

// ----------------------------------------------

const testCases = [
    { inp: -30, res: -22 },
    { inp: -10, res: 14 },
    { inp: 0, res: 32 },
    { inp: 20, res: 68 },
    { inp: 30, res: 86 },
]

// run test
Test.assertAll(testCases, fun);