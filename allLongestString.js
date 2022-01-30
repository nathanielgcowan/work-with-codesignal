function name(array) {
    let largest = 0;

    for ( i = 0; i < array.length; i++) {
        if ( array[i].length > largest) {
            largest = array[i].length
        }
    }

    array = array.filter(e => {
        return e.length=== largest;
    })
    return array
}