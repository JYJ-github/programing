function solution(my_string) {
    result = [...new Set(my_string.split(''))].join('');
    return result;
}