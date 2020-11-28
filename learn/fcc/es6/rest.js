// testing rest operator

const all =  ( ...yes ) => console.log(...yes);
const first = ( first, ...yes ) => console.log("\nfirst", first, "\nlist", yes);
const first = ( ...yes, last ) => console.log("\nlist", yes, "\nlast", last, );

let list = [ "single" , 3, 4, 5, "no" ];

all(...list);       // default rest         OK
first(...list);     // split first param    OK
last(...list);      // split last param     ERR

