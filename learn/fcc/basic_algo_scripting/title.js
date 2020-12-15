const Test = require('./test')

// ----------------------------------------------
const fun = str => {
    let arr = str.toLowerCase().split(" ")
        .map(word => {
            let wArr = word.split("");
            wArr[0] = wArr[0].toUpperCase();
            return wArr.join("")
        }
    )
    
    return arr.join(" ");
}

// ----------------------------------------------

const testCases = [
    { inp: "I'm a little tea pot", res: "I'm A Little Tea Pot" }, 
    { inp: "sHoRt AnD sToUt", res: "Short And Stout" }, 
    { inp: "HERE IS MY HANDLE HERE IS MY SPOUT", res: "Here Is My Handle Here Is My Spout" }, 
]

// run test
Test.assertAll(testCases, fun);