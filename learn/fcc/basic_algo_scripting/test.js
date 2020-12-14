// lmao writing my own testing method

class Test {
    constructor () {
        console.log("init test suite");
        console.log("---------------")
        this.count  = 1;
    }

    assert(test, answer) {
        let res = test === answer;
        console.log(`\ntest #${this.count} - ${res? "passed" : "failed"}`)
        
        if (res) return true;
        else {
            console.log(`expected: ${answer}`);
            console.log(`received: ${test}`);
            return false;
        }
    }
}

module.exports = new Test();
