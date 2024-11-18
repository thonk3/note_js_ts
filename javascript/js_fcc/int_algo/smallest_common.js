let ans = Math.max(...arr)
let div = [];

// creating 
for (let i = Math.min(...arr); i <= ans; i++)
    div.push(i);

// stuff
let flag = false;
let multi = 0;
while (!flag) {
    multi++;
    ans = Math.max(...arr) * multi;
    flag = div.every(e => ans % e === 0);
}

return ans;