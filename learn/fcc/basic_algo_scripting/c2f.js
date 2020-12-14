const Test = require('./test')

// ----------------------------------------------
const fun = input => {

    return input;
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
Test.assertAll(testCases, fun);