// lmao writing my own testing method
// alright this is trash
// need more abstractions

// TODO
// make it less trash, too much edgecases i didnt handle
// cannot do
// - check objects
// - check n-dimention arrays
// - stuff
// i dont think im handling multi args questions properly either
// it currently needs a seperate method to do that

// TO USE: import with require 
// 3 main methods to call depending on the question
// see template.js or any other file for how to use
//
// assertAll(arr, action)
// assertArrAll(arr, action)
// assertAllMultiArg(arr, action)

class Test {
    constructor () {
        console.log("init test suite");
        console.log("---------------")
        this.count  = 1;
    }

    result(res,test,ans) {
        console.log(`test #${this.count++} - ${res? "passed" : "failed"}`)
        
        if (res) return true;
        else {
            console.log(`> expected(${typeof answer}): ${ans}`);
            console.log(`> received(${typeof test}): ${test}`);
            return false;
        }
    }

    assert(test, answer) {
        let res = test === answer;
        return this.result(res,test,answer);
    }

    assertArr(test, answer) {
        let res = answer.every((elem, i) => test[i] === elem);
        return this.result(res,test,answer);
    }

    /**
     *  uhh bad doc
     *  yes to see if your your bad code works or not
     *  use this if the expected output for the testing method IS AN ARRAY
     * 
     *  @param arr - the testcases and function aparam array
     *  @param action - the function to test
     * */
    assertArrAll(arr, action) {
        arr.every(e => this.assertArr(action(e.inp), e.res));
    }

    /**
     *  uhh bad doc
     *  yes to see if your your bad code works or not
     *  use this if the expected output for the testing method is NOTS an object/array
     * 
     *  @param arr - the testcases and function aparam array
     *  @param action - the function to test
     * */
    assertAll(arr, action) {
        arr.every(e => this.assert(action(e.inp), e.res));
    }

    /**
     *  yes to see if your your bad code works or not
     *  use this if the expected output for the testing method is NOT an object/array
     *  AND if it is taking multiple parameters
     * 
     *  @param arr - the testcases and function aparam array
     *  @param action - the function to test
     * */
    assertAllMultiArg(arr, action) {
        arr.every(e => this.assert(action(...e.inp), e.res));
    }
}

module.exports = new Test();
