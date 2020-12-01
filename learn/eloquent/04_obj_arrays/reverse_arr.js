let arr = [1, 2, 3, 4, 5];

// write 2 functions to reverse an array without using reverse

// this one is allowed to return a new array
const reverseArray = (array) => {
    // so use push pop shift unshift
    let newA = [];
    const size = array.length
    for(let i = 0; i < size; i++) {
        newA.push(array.pop());
    }

    return newA;
}

// console.log(reverseArray(arr))
// console.log(arr);

// so this will directly modifies the given array
// ive done this swap the half
const reverseInPlace = (arr) => {
    for(let i = 0; i < Math.floor(arr.length/2); i++) {
        let tmp = arr[i];
        arr[i] = arr[arr.length -1 - i];
        arr[arr.length -1 - i] = tmp;
    }

    return arr;
}


console.log(reverseInPlace(arr))





