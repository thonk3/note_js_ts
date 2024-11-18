function steamrollArray(arr) {
    let out = [];
    const flat = (ting) => {
        if (Array.isArray(ting)) ting.forEach(e => flat(e));
        else out.push(ting);
    };

    arr.forEach(e => flat(e));

    return out;
}