const Test = require('./test')

// ----------------------------------------------
const fun = (str, target) => {
    return target === str.substring(str.length - target.length);
}

// ----------------------------------------------

const testCases = [
    { inp: ["Bastian", "n"] ,res: true },
    { inp: ["Congratulation", "on"] ,res: true },
    { inp: ["Connor", "n"] ,res: false },
    { inp: ["Walking on water and developing software from a specification are easy if both are frozen", "specification"] ,res: false },
    { inp: ["He has to give me a new name", "name"] ,res: true },
    { inp: ["Open sesame", "same"] ,res: true },
    { inp: ["Open sesame", "sage"] ,res: false },
    { inp: ["Open sesame", "game"] ,res: false },
    { inp: ["If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"] ,res: false },
    { inp: ["Abstraction", "action"] ,res: true },
]

// run test
Test.assertAllMulti(testCases, fun);