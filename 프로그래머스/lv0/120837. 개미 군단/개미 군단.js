function solution(hp) {
    let num = 0
    while(hp >= 5) {
        hp -= 5
        num++
    }
    if ((hp == 4) || (hp == 2)) {
        num = num + 2
    } else if ((hp == 3) || (hp == 1)) {
        num = num + 1
    } else {
        num = num
    }
    return num    
}