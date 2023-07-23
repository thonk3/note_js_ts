const Test = require('./test')

// ----------------------------------------------
const fac = num => {
    return (num === 0) ?
        1 
        :
        fac(num -1) * num;
}

// ----------------------------------------------

const testCases = [
    { inp: 5, res: 120 },
    { inp: 10, res: 3628800 },
    { inp: 20, res: 2432902008176640000 },
    { inp: 0, res: 1 },
]

// run test
Test.assertAll(testCases, fac);