function solution(numbers, k) {
    let k_num = 2 * (k - 1);
    while (k_num >= numbers.length) {
        k_num -= numbers.length;
    }
    return numbers[k_num];
}