const Test = require('./test')

// ----------------------------------------------
const fun = input => {
    return arr.filter(item => item);
}

// ----------------------------------------------

const testCases = [
    { inp: -30, res: -22},
    { inp: -10, res: 14},
    { inp: 0, res: 32},
    { inp: 20, res: 68},
    { inp: 30, res: 86},
]

// run test
// code works, tests no work
// ick fix later
Test.assertAll(testCases, fun);