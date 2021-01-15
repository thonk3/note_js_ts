const Test = require('./test')

// ----------------------------------------------
const fun = str => {
    return str.split(" ")
        .reduce((a, b) => a.length > b.length ? a : b)
        .length;
}

// ----------------------------------------------

const testCases = [
    { inp: "The quick brown fox jumped over the lazy dog", res: 6 },
    { inp: "May the force be with you", res: 5 },
    { inp: "Google do a barrel roll", res: 6 },
    { inp: "What is the average airspeed velocity of an unladen swallow", res: 8 },
    { inp: "What if we try a super-long word such as otorhinolaryngology", res: 19 },
]

// run test
Test.assertAll(testCases, fun);