const Test = require('./test')

// ----------------------------------------------
// cheated cause ceebs regex
const fun = input => {
    // split string by
    //  \s          space
    //  _           underscore char
    //  (?=[A-Z])   followed by an uppercase
    return str
        .split(/\s|_|(?=[A-Z])/)
        .join("-")
        .toLowerCase();
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