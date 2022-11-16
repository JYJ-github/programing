function solution(my_string, num1, num2) {
    let str_arr = my_string.split('')
    let temp = str_arr[num1]
    str_arr[num1] = str_arr[num2]
    str_arr[num2] = temp
    return str_arr.join('')
}