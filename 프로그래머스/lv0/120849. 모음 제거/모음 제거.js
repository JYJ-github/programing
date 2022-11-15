function solution(my_string) {
    my_string = my_string.replace(/a/g,'')
    my_string = my_string.replace(/i/g,'')
    my_string = my_string.replace(/e/g,'')
    my_string = my_string.replace(/o/g,'')
    my_string = my_string.replace(/u/g,'')

    return my_string
}
