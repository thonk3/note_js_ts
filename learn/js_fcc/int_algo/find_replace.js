// search a string to replace a word
// rush solution, need refactoring

function myReplace(str, before, after) {
    // check case
    let uCase = before[0] === before[0].toUpperCase();
    if (uCase) {
        let nAfter = after.slice().split('');
        nAfter[0] = nAfter[0].toUpperCase();

        after = nAfter.join('');
    }

    // check lower
    let lCase = before[0] === before[0].toLowerCase();
    if (lCase) {
        let nAfter = after.slice().split('');
        nAfter[0] = nAfter[0].toLowerCase();

        after = nAfter.join('');
    }


    // creating word
    let nStr = str.split(" ").map(e => {
        return e === before ? after : e;
    });

    console.log(nStr.join(" "));

    return nStr.join(" ")
}