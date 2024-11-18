function truthCheck(collection, pre) {
    return collection.every(e => e[pre]);
}