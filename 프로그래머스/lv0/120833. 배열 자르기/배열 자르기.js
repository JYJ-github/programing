function solution(numbers, num1, num2) {
    let arr = []
    for (i = num1; i <= num2; i++) {
        arr.push(numbers[i])
    }
    return arr
}