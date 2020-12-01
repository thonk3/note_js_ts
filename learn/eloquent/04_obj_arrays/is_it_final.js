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
    let top = tb[3] * tb[0] + tb[2] + tb[1];
    let bottom = Math.sqrt(
        (tb[2] + tb[3]) *
        (tb[0] + tb[1]) *
        (tb[1] + tb[3]) *
        (tb[0] + tb[2])
    );

}
// === function definitions ===

// === main ===


