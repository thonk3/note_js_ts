const CASH_VAL = { "ONE HUNDRED": 100, "TWENTY": 20, "TEN": 10, "FIVE": 5, "ONE": 1, "QUARTER": 0.25, "DIME": 0.1, "NICKEL": 0.05, "PENNY": 0.01, }
const STATUS = { OPEN: "OPEN", CLOSED: "CLOSED", INSUFFICIENT_FUNDS: "INSUFFICIENT_FUNDS" }

function checkCashRegister(price, cash, cid) {
    let changeDue = cash - price;
    let cidObj = cidToObject(cid);
    let change = [];
    let status;
    i;
    console.log(cidTotal(cid));

    // something is happening
    let checkFlag = true;

    // closed
    if (cidTotal(cid) === changeDue)
        return { status: STATUS.CLOSED, change: cid };

    // 






    // closed  if change == 
    status = STATUS.CLOSED;
    return { status, change };
}

// converting cid 2d arr to object 
const cidToObject = (cid) => {
    let obj = {};
    cid.forEach(e => obj[e[0]] = e[1]);

    console.log(obj);
    return obj;
}

const cidTotal = (cid) => {
    let total = 0;
    cid.forEach(e => total += e[1]);

    console.log(total);
    return total;
}



// checkCashRegister(
//     19.5,
//     20,
//     [
//         ["PENNY", 1.01],
//         ["NICKEL", 2.05],
//         ["DIME", 3.1],
//         ["QUARTER", 4.25],
//         ["ONE", 90],
//         ["FIVE", 55],
//         ["TEN", 20],
//         ["TWENTY", 60],
//         ["ONE HUNDRED", 100]
//     ]
// );


console.log(
    checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

)