function solution(array) {
    let index = 0
    let max_num = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max_num) {
            max_num = array[i]
            index = i
        }
    }
    return [max_num, index]
}