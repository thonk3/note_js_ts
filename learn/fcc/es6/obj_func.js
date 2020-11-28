let obj = {
    num: 3,
    // change: (a) => this.num = a,    // wrong
    change(a) { this.num = a }, // ok
}

obj.change(5);
console.log(obj.num)
