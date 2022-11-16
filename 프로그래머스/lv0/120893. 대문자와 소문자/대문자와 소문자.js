function solution(my_string) {
    let reverse_alpha = ''
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i].charCodeAt() >= 97) {
            reverse_alpha += my_string[i].toUpperCase()
        } else {
            reverse_alpha += my_string[i].toLowerCase()
        }
    }
    return reverse_alpha;
}