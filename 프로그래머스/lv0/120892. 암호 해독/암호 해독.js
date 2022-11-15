function solution(cipher, code) {
    let str = '';
    for (let i = 1; i <= (cipher.length / code); i++) {
        let num = code * i - 1
        str += cipher[num]
    }
    return str
}