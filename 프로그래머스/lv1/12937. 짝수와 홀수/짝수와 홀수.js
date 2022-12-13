function solution(num) {
  if (num >= 0) {
    return num % 2 === 1 ? "Odd" : "Even";
  } else {
    return num % 2 === -1 ? "Odd" : "Even";
  }
}
