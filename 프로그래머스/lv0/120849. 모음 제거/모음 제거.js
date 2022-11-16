function solution(my_string) {
    let str_arr = ['a', 'i', 'u', 'e', 'o']
    for (let i = 0; i < str_arr.length; i++) {
        let pattern = new RegExp(str_arr[i], "g")
        my_string = my_string.replace(pattern, '')
    }
    return my_string
}