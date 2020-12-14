const Test = require('./test')

// ----------------------------------------------
const reverse = input => {
    let a = [], 
        len = input.length, 
        half = Math.ceil(len/2);

    a[half] = input[half];
    for (let i = 0; i < half; i++) {
        a[i] =  input[len-i-1];
        a[len-i-1] =  input[i];
    }
    return a.join("");
}

// ----------------------------------------------

const testCases = [
    { inp: "hello", res: "olleh"},
    { inp: "Howdy", res: "ydwoH"},
    { inp: "Greetings from Earth", res: "htraE morf sgniteerG"},
]

// run test
Test.assertAll(testCases, reverse);