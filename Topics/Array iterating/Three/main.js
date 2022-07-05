function three(arr) {
    for (const arrKey in arr) {
        if(arr[arrKey] === 3){
            return arrKey;
        }
    }
    return -1;
}
