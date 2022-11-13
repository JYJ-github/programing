function solution(num_list) {
    let arr_reverse = []
    for (let i = 1; i < (num_list.length + 1); i++) {
        arr_reverse.push(num_list[num_list.length - i])
    }
    return arr_reverse
}