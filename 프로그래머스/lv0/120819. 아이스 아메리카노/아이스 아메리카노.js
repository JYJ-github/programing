function solution(money) {
    num = Math.floor(money / 5500)
    return [num, money - (5500 * num)]
}