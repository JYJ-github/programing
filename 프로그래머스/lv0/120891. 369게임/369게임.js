function solution(order) {
    let num = 0;
    let str_order = String(order)
    for (let i = 0; i < str_order.length; i++) {
        if ((str_order[i] == 3) || (str_order[i] == 6) || (str_order[i] == 9)) {
            num++
        }
    }
    return num
}