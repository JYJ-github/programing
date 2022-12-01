function solution(s) {
    result = s.split("").sort().map((value, index, array) => {
        if (array[index - 1] !== array[index] && array[index] !== array[index + 1]) {
            return value
        }
    });
    let realResult = result.filter(string => typeof string === 'string');

    return realResult.join('')
}