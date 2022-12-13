function solution(n) {
  return String(n)
    .split("")
    .map((num) => Number(num))
    .reverse();
}
