function solution(num_list) {
    let arr = [0, 0]
    for (i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            arr[0] += 1
        } else {
            arr[1] += 1
        }
    }
    return arr
}
