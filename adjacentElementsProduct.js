function solution(inputArray) {
    var product = inputArray[0] * inputArray[1]
    
    for ( i=0; i < inputArray.length; i++) {
        product = inputArray[i] * inputArray[i + 1] > product ? inputArray[i] * inputArray[i + 1] : product
    }
    
    return product
}

