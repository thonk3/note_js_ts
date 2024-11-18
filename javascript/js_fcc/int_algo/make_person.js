var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullN = firstAndLast;
  let firstN = firstAndLast.split(" ")[0];
  let lastN = firstAndLast.split(" ")[1];

  this.getFirstName = () => firstN;
  this.getLastName = () => lastN;
  this.getFullName = () => fullN;

  this.setFirstName = (first) => {
    firstN = first;
    fullN = [firstN, lastN].join(" ");
  }

  this.setLastName = (last) => {
    lastN = last;
    fullN = [firstN, lastN].join(" ");
  }

  this.setFullName = (firstAndLast) => {
    fullN = firstAndLast;
    firstN = firstAndLast.split(" ")[0];
    lastN = firstAndLast.split(" ")[1];
  }

  return firstAndLast;
};

// rushed job
// could be better