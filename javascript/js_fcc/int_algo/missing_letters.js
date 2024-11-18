function fearNotLetter(str) {
    let letter = undefined;
    let thing = str.split("");

    for (let i = 1; i < thing.length; i++) {
        let prev = thing[i - 1].charCodeAt();
        let cur = thing[i].charCodeAt();
        if (cur != prev + 1) {
            letter = String.fromCharCode(prev + 1);
            break;
        }
    }

    return letter;
}
