function solution(my_string, a) {
    for (let i = 0; i < my_string.length; i++) {
        my_string = my_string.replace(a, '')
    }
    return my_string
}