// lmao writing my own testing method

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
        let res = answer.every(item => test.includes(item));
        return this.result(res,test,answer);
    }

    assertArrAll(arr, action) {
        arr.every(e => this.assertArr(action(e.inp), e.res));
    }

    assertAll(arr, action) {
        arr.every(e => this.assert(action(e.inp), e.res));
    }

    assertAllMulti(arr, action) {
        arr.every(e => this.assert(action(...e.inp), e.res));
    }
}

module.exports = new Test();
