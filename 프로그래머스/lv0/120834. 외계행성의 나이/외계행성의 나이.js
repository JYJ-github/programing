function solution(age) {
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    let str = ''
    let str_age = String(age)
    for (let k = 0; k < str_age.length; k++) {
        for (let l = 0; l < arr.length; l++) {
            if (str_age[k] == l) {
                str += arr[l]
            }
        }
    }
    return str
}