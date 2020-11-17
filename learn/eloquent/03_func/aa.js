// function a() {
//     console.log("word");
// }

// console.log(typeof a);
// a = 3;
// console.log(typeof a);

// const b = () => {};
// console.log(typeof b);
// b = 3;
// console.log(typeof b);

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(121));
// → (((1 * 3) + 5) * 3)