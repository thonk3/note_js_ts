const Test = require('./test')

// ----------------------------------------------
const fun = (arr1, arr2, n) => {
    let arrFr = arr2.slice(0, n);
    let arrBk = arr2.slice(n);
    
    return [...arrFr, ...arr1, ...arrBk];
}

// ----------------------------------------------

const testCases = [
    { inp: [ [1, 2, 3], [4, 5], 1 ], res: [4, 1, 2, 3, 5] }, 
    { inp: [ [1, 2], ["a", "b"], 1 ], res: ["a", 1, 2, "b"] }, 
    { inp: [ ["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2 ], res: ["head", "shoulders", "claw", "tentacle", "knees", "toes"] }, 
]

// run test
// this works, just ceebs making the tests works
Test.assertAllMulti(testCases, fun);