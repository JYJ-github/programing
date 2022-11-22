function solution(chicken) {
    let chickenCupon = 0;
    while (chicken >= 10) {
        chickenCupon += parseInt(chicken / 10);
        chicken = parseInt(chicken / 10) + (chicken % 10);
    }
    return chickenCupon;
}