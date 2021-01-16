function binaryAgent(str) {
    return str
        .split(" ")
        .map(e => String.fromCharCode(parseInt(e, 2)))
        .join("");
}