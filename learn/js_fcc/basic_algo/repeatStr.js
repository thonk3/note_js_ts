const Test = require('./test')

// ----------------------------------------------
const fun = (str, num) => {
    let out = "";
    for(let i = 0; i < num; i++) {
        out += str;
    }

    return out;
}

// ----------------------------------------------

const testCases = [
    { inp: ["*", 3], res: "***" },
    { inp: ["abc", 3], res: "abcabcabc" },
    { inp: ["abc", 4], res: "abcabcabcabc" },
    { inp: ["abc", 1], res: "abc" },
    { inp: ["*", 8], res: "********" },
    { inp: ["abc", -2], res: "" },
    { inp: ["abc", 0], res: "" },
]

// run test
Test.assertAllMulti(testCases, fun);