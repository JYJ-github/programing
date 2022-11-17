function solution(n) {
    let fac_arr = [];
    for (let i = 0; i <= 10; i++) {
        let num = 1;
        let j = i;
        while (j >= 1) {
            num = num * j;
            j--;
        }
        fac_arr.unshift(num);
    }
    for (let k = 0; k < 10; k++) {
        if (n >= fac_arr[k]) {
            return 10 - k;
        }
    }
}