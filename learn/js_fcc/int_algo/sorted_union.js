function uniteUnique(...arr) {
    let newArr = [];

    arr.forEach(inner => {
        inner.forEach(items => {
            if (!newArr.includes(items))
                newArr.push(items);
        })
    })

    return newArr;
}