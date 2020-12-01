// deep comparison to compare between 2 objects?

// deep equal
// take 2 values
// return true only if 2 values or objects contain the same data

let obj = { here: { is: "an" }, object: 2 };

const deepEqual = (a ,b) => {
    if (typeof a === typeof b) {
        if(typeof a === typeof {}) {
            let aKeys = Object.keys(a);
            let bKeys = Object.keys(b);

            for (let k of aKeys) {

            }

        } else return a === b;
    }
    return false;
}

console.log(typeof {})
console.log(Object.keys(obj));

// yeah not completed.
// ive spent too much time on this chapt already
// should try to complete it though