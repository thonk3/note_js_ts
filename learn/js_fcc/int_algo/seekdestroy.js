const Test = require('./test')

// ----------------------------------------------
// wierd ass descriptions
const fun = arr => {
    let re = [],
        check = arr.slice(1);

    arr[0].forEach(e => {
        if (!check.includes(e))
            re.push(e)
    })

    return re;
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