const Test = require('./test')

// ----------------------------------------------
// check obj arrays if it contains source objects
const fun = (collection, source) => {
    var arr = [];

    collection.forEach(e => {
        // check if each obj props match the source's props
        let flag = Object.keys(source).every(k => e[k] === source[k]);
        if (flag) arr.push(e);
    })

    return arr;
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