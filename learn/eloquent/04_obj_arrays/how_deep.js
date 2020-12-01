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

        } else return a === b;
    }
    return false;
}

console.log(typeof {})
console.log(Object.keys(obj));