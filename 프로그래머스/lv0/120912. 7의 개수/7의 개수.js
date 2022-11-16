function solution(array) {
    let str_arr = array.join('');
    let num = 0;
    for (let i = 0; i < str_arr.length; i++) {
        if (str_arr[i] === "7") {
            num++
        }
    }
    return num
}