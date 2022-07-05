function sumTheArrays(naturalNumbers) {
    let arr = new Array(5);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = naturalNumbers["even"][i] + naturalNumbers["odd"][i];
    }

    return arr;
}