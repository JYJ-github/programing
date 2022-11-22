function solution(n, m) {
    let fact = function (k) {
        let num = 1;
        for (let i = 1; i <= k; i++) {
            num *= i;
        }
        return num;
    }
    let answer = Math.round(fact(n) / ((fact(n - m)) * fact(m)));
    return answer;
}