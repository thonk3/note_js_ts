var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
      printNumTwo = () => i;
  }
}
console.log(printNumTwo());
// returns 3
// this is because of i declared with var
// printNumTwo returns the updated globally declared i

// changing var to let would fix this issue
// to return 2
