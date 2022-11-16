function solution(my_string) {        
    let string = my_string.toLowerCase().split('').sort().join('')
    return string
}