// print a 8x8 chessboard pattern

const even = () => console.log(" # # # #");
const odd = () => console.log("# # # # ");

for (let i = 0; i < 8; i++) {
    if(i % 2 === 0) even();
    else odd();
}