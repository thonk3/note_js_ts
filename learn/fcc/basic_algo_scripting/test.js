// lmao writing my own testing method

class Test {
    constructor () {
        console.log("init test suite");
        console.log("---------------")
        this.count  = 1;
    }

    assert(test, answer) {
        let res = test === answer;
        console.log(`test #${this.count++} - ${res? "passed" : "failed"}`)
        
        if (res) return true;
        else {
            console.log(`> expected(${typeof answer}): ${answer}`);
            console.log(`> received(${typeof test}): ${test}`);
            return false;
        }
    }

    assertAll(arr, action) {
        arr.every(e => this.assert(action(e.inp), e.res));
    }
}

module.exports = new Test();
