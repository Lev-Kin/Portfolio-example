function newRemove(array, index, n) {
    return array.slice(0, index).concat(array.slice(index + n));
}