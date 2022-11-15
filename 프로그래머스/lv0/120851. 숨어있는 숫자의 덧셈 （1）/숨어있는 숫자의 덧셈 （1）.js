function solution(my_string) {
    let sum = 0
    for (let i = 0; i < my_string.length; i++) {
        if (!isNaN(my_string[i])) {
            sum += Number(my_string[i])
        }
    }
    return sum
}