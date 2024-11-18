// importing data
const JOURNAL = require("./journal");

/**
 * phi coefficient equation based on 2x2 matrix
 * 
 * @param tb array of length 4 array 
 * @return result of the equation
 *         undefined if table is bad
 */
const phi = (tb) => {
    if(tb.length !== 4) return undefined;
    let top = (tb[3] * tb[0] - tb[2] * tb[1]);
    let bottom = Math.sqrt(
        (tb[2] + tb[3]) *
        (tb[0] + tb[1]) *
        (tb[1] + tb[3]) *
        (tb[0] + tb[2])
    );

    return top/bottom;
}

// creating coefficient table for an activity
const makeTable = (event, journal) => {
    let table = [0, 0, 0, 0];

    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;

        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        
        table[index] += 1;
    }


    return table;
}

// return an array of unique activities from the journal
const journalEvents = (J) => {
    let unique = [];

    for(let entry of J) {
        for(let ev of entry.events)
            if(!unique.includes(ev)) unique.push(ev);
    }

    return unique;
}
// === function definitions ===

// === main ===
let x = 0;
for(let ev of journalEvents(JOURNAL)) {
    let corroletion = phi(makeTable(ev, JOURNAL));

    // filter out too small values
    if (corroletion > 0.1 || corroletion < -0.1) {
        console.log(ev, corroletion);
    }
}

// ---------------------------------------------
console.log("\nThi is a thing");
// combination of activities
for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth");
    }
}
console.log(phi(makeTable("peanut teeth", JOURNAL)));