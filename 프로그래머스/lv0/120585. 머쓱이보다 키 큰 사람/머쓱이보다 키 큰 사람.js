function solution(array, height) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > height)
            sum += 1       
    }
    return sum
}