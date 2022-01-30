function name(array) {
    var count = 1;
    for ( i = 0 ; i < array.length; i++) {
        count += 4 * i
    }
    return count
}