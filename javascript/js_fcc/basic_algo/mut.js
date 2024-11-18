const Test = require('./test')

// ----------------------------------------------
const fun = input => {
    arr[0] = arr[0].toLowerCase().split("");
    arr[1] = arr[1].toLowerCase().split("");

    return arr[1].every(lt =>
        arr[0].includes(lt)
    )
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