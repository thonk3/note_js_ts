// yep its a linked list using json
// not really linked perse but nested

// each node has
// {
//     value: value,
//     rest: next node
// }


let arr = [1, 3, 5, 7, 9];

// arrayToList
// gets an array returns a list
const arrayToList = array => {
    let head = { value: array[0], rest: null }
    let next = head;

    for(let i = 1; i < array.length; i++) {
        next.rest = { value: array[i], rest: null }
        next = next.rest;
    }

    return head;
}
// ok good 

let list = arrayToList(arr);
console.log("linked list", list);


// listToArray
// gets list return array
const listToArray = list => {
    let array = [];
    let next = list;

    for(let node = list; node; node = node.rest) 
        array.push(node.value);

    // another way to iterate
    // do {
        // array.push(next.value);
        // next = next.rest;
    // } while (next.rest !== null);

    return array
}

let array = listToArray(list);
console.log("array", array)

// prepend
// gets elem, list adds to the fronth
const prepend = (value, list) => {
    let next = list;

    while (next.rest != null) {
        next = next.rest;
    }

    next.rest = { value, rest: null };
}

prepend(11, list);
console.log("new list", list.rest.rest.rest);
// ok



// nth 
// gets list and number, return value at that position

// iterative
const nthIterative = (list, index) => {
    // assuming index is within range
    let next = list;
    for (let i = 1; i < index; i++) {
        next = next.rest
    }

    return (next) ? next.value : -1; // not found
}

console.log("item at 3 is", nthIterative(list, 6))
// recursive

const nthRecur = (list, index) => {
    if(index === 0) return (list)? list.value : -1;
    else {
        return nthRecur(list.next, index-1);
    }

}

console.log("item at 2 is", nthIterative(list, 4))




