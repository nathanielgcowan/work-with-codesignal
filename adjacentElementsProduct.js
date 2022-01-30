function name(arr) {
    var pd = arr[0] * arr[1]
    for (i=0; i < arr.length; i++) {
        pd = arr[i] * arr[i+1] >= pd ? arr[i] * arr[i+1] : pd
    }
    return pd 
}