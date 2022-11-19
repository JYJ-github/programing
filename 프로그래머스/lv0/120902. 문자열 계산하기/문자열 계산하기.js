function solution(my_string) {
    let str_arr = my_string.split(' ');
    let arr_first = Number(str_arr[0]);

    for (let i = 1; i < str_arr.length; i+=2) {
        if (str_arr[i] === '+') {
            arr_first += Number(str_arr[i+1]);
        } else {
            arr_first -= Number(str_arr[i+1]);
        }
    }
    return arr_first;
}
