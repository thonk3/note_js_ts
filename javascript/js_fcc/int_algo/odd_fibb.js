function sumFibs(num) {
    let fib = [1];
    let cur = 1;

    while (cur <= num) {
        fib.push(cur);
        cur = cur + fib[fib.length - 2];
    }

    num = fib.filter(e => e % 2 === 1).reduce((a, b) => a + b);
    return num;
}