// write a function tthat count B (CAPITAL)
const countBs = word => {
    let c = 0;
    for (let i = 0; i < word.length; i++) 
        if(word[i] === "B") c = c + 1;
    return c;
}

// write function that counts number of chars
const count = (word, char) => {
    let c = 0;
    for (let i = 0; i < word.length; i++) 
        if(word[i] === char) c = c + 1;

    return c; 
}

console.log(count("kakkerlak", "k"));
console.log(countBs("BBC"));