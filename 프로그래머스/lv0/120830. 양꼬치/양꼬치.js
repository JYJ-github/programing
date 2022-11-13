function solution(n, k) {
    sum = (12000 * n) + 2000 * (k - Math.floor(n / 10))
    return sum;
}