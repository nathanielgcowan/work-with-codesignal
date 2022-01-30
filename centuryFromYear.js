function name(yr) {
    var ourNumber = yr / 100;
    if (yr % 100 === 0) {
        return ourNumber
    }
    return Math.floor(ourNumber) + 1
}