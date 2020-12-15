const Test = require('./test')

// ----------------------------------------------
const fun = (arr, size) => {
    let out = [];
    let chunk = [];

    arr.forEach(item => {
        chunk.push(item);
        if (chunk.length === size) {
            out.push(chunk);
            chunk = [];
        }
    });

    if (chunk.length !== 0)
        out.push(chunk);
    return out;
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