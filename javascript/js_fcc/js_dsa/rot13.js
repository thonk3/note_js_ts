function rot13(str) {
    const cA = 'A'.charCodeAt(0),
        cZ = 'Z'.charCodeAt(0);

    // change each word
    let res = str.slice().split(" ").map(word => {
        // shift each letter in word
        let split = word.split("").map(c => {
            let cCode = c.charCodeAt(0);

            // check for non capital letters
            if (cCode < cA || cCode > cZ) return c
            let conv = cCode >= 78 ? cCode - 13 : cCode + 13;

            return String.fromCharCode(conv);
        });

        return split.join("");
    });

    return res.join(" ");
}