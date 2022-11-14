function solution(rsp) {
    let str = ''
    for (let i = 0; i < rsp.length; i++) {
        if (rsp[i] == 0) {
            str += 5
        } else if (rsp[i] == 2) {
            str += 0
        } else {
            str += 2
        }
    }
    return str
}