function solution(num, k) {
    let str_num = String(num)
    let index_num = -1
    for (let i = 0; i < str_num.length; i++) {
        if (str_num[i] == k) {
            index_num = i + 1
            return index_num
        }             
    }
    if (index_num == -1) {
        return index_num
    }
    
}