// prints a simple triangle

const print = () => {
    for(let i = 1; i <= 7; i++) {
        pr_floor(i);
    }
}

const pr_floor = (fl) => {
    let s = "";
    for(let i = 0; i < fl; i++) {
        s += "#";
    }
    console.log(s);
}

print();