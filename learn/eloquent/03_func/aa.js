function a() {
    console.log("word");
}

console.log(typeof a);
a = 3;
console.log(typeof a);

const b = () => {};
console.log(typeof b);
b = 3;
console.log(typeof b);