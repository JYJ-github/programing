function solution(a, b, c) {
    let num_str = '';
    let k = 0;
    for (let i = a; i <= b; i++) {
        num_str += String(i);
    }
    let num_arr = num_str.split('');
    for (let i = 0; i < num_arr.length; i++) {
        if (c == num_arr[i]) {
            k++;
        }
    }
    return k
}