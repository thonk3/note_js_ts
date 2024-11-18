const Test = require('./test')

// ----------------------------------------------
const fun = bool => {
    return typeof bool === typeof true;
}

// ----------------------------------------------

const testCases = [
    { inp: true, res: true }, 
    { inp: false, res: true }, 
    { inp: [1, 2, 3], res: false }, 
    { inp: [].slice, res: false }, 
    { inp: { "a": 1 }, res: false }, 
    { inp: 1, res: false }, 
    { inp: NaN, res: false }, 
    { inp: "a", res: false }, 
    { inp: "true", res: false }, 
    { inp: "false", res: false }, 
]

// run test
Test.assertAll(testCases, fun);