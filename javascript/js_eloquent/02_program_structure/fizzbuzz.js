// simple fizz buzz
// 1 - 100

for (let i = 1; i <= 100; i++) {
    let s = i.toString();
    s += " - ";

    if(i % 3 === 0) s += "Fizz";
    if(i % 5 === 0) s += "Buzz";

    console.log(s);
}