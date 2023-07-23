function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    let a = 2 * Math.PI;

    arr = arr.map(e => {
        let c = Math.pow(earthRadius + e.avgAlt, 3);
        let b = Math.sqrt(c / GM);

        return {
            name: e.name,
            orbitalPeriod: Math.round(a * b)
        }
    });

    console.log(arr);
    return arr;
}