// some object methods in action

let object = {
    case: "vega",
    switch: "kiwi",
    count: 26,
}

console.log("the object", object);
console.log("switches", object.swich);

console.log("\ndoes it has the prop case: ", "case" in object);
console.log("does it has the prop shape: ", object.hasOwnProperty("shape"));

console.log("\npre delete prop: ", Object.keys(object));
delete object.count;
console.log("pre delete prop: ", Object.keys(object));
