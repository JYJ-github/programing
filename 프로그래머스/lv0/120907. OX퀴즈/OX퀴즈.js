function solution(quiz) {
    let answer = [];
    for (let i = 0; i < quiz.length; i++) {
        let quiz_num = quiz[i].split(' ');
        if (((quiz_num[1] === '+') && (Number(quiz_num[0]) + Number(quiz_num[2]) === Number(quiz_num[4])))) {
            answer.push("O");
        } else if (((quiz_num[1] === '-') && (Number(quiz_num[0]) - Number(quiz_num[2]) === Number(quiz_num[4])))){
            answer.push("O");
        } else {
            answer.push("X");
        }
    }
    return answer;
}