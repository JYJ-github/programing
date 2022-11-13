function solution(my_string) {
    let reverse_str = ''
    for (i = 1; i <= my_string.length; i++) {
        let add_str = my_string[(my_string.length - i)]
        reverse_str += add_str
    }
    return reverse_str
}