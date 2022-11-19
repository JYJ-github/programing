function solution(my_str, n) {
    let answer = [];
    let num = Math.ceil(my_str.length / n);
    for (let i = 0; i < num; i++) {
        answer.push(my_str.slice(n * i, n *(i + 1)));
    }
    return answer;
}