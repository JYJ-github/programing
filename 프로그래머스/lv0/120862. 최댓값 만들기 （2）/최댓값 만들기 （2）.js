function solution(numbers) {
    let arr = numbers.sort(function(a, b) {return a - b});
    let first_num = arr[0] * arr[1]
    let last_num = arr[arr.length-1] * arr[arr.length-2]
    if (first_num > last_num) {
        return first_num
    } else {
        return last_num
    }
}