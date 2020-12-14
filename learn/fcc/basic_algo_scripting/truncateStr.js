const Test = require('./test')

// ----------------------------------------------
const fun = (str, num) => {
    let out = [];
    for(let i = 0; i < num; i++) {
        out[i] = str[i];
    }

    return out.join("") + ((num < str.length) ? "..." : "");
}

// ----------------------------------------------

const testCases = [
    { inp: [ "A-tisket a-tasket A green and yellow basket", 8 ], res: "A-tisket..." },
    { inp: [ "Peter Piper picked a peck of pickled peppers", 11 ], res: "Peter Piper..." },
    { inp: [ "A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length ], res: "A-tisket a-tasket A green and yellow basket" },
    { inp: [ "A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2 ], res: "A-tisket a-tasket A green and yellow basket" },
    { inp: [ "A-", 1 ], res: "A..." },
    { inp: [ "Absolutely Longer", 2 ], res: "Ab..." },
]

// run test
Test.assertAllMulti(testCases, fun);