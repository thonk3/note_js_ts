const Test = require('./test')

// ----------------------------------------------
// checking 2 arrays and return the difference
const fun = (arr1, arr2) => {
    var newArr = [];

    let add = (a, b) => {
        a.forEach(e => {
            if (!b.includes(e) && !newArr.includes(e))
                newArr.push(e);
        })
    }

    add(arr1, arr2);
    add(arr2, arr1);

    return newArr;
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