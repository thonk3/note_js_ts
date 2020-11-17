// test even using recursion
// check N - 2
// 0 is even
// 1 is odd

const isEven = n => {
    let N = Math.abs(n);

    if(N === 1) return false;
    if(N === 0) return true;

    return isEven(N - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));