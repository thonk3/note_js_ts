function sumPrimes(num) {
    let list = []

    for (let i = 2; i <= num; i++) {
        if (isPrime(i))
            list.push(i);
    }

    return list.reduce((a, b) => a + b);
}

function isPrime(n) {
    let x = Math.floor(Math.sqrt(n));
    while (x >= 2) {
        if (n % x === 0) return false;
        x--;
    }

    return true;
}
