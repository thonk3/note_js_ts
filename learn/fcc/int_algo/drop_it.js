function dropElements(arr, func) {
    let out = [];
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
        if (!flag && func(arr[i])) flag = true;

        if (flag) out.push(arr[i]);
    }

    return out;
}