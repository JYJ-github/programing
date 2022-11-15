function solution(n) {
    let sum = 0
    for (let i = 0; i < String(n).length; i++) {
    sum += Number(String(n)[i])
}

    return sum
}