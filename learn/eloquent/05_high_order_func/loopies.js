// write higher order loop
// (value, test, update, body)

// for loop
const loop = (value, test, update, body) => {
    for(value; test(value); value = update(value)) 
        body(value)
}

// while loop
const loopies = (value, test, update, body) => {
    while(test(value)) {
        body(value);
        value = update(value);
    }
}

loopies(3, n => n > 0, n => n - 1, console.log);