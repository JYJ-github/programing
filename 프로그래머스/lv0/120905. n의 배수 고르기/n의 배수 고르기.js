function solution(n, numlist) {
    let arr = []
    for (i = 0; i < numlist.length; i++) {
        if (numlist[i] % n == 0) {
            arr.push(numlist[i])
        }
    }
    return arr
}