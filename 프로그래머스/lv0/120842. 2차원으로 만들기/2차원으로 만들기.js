function solution(num_list, n) {
    let answer = [];
    let dimension = num_list.length / n;
    for (let i = 1; i <= dimension; i++) {
        answer.push(num_list.splice(0 , n));
    }
    return answer;
}