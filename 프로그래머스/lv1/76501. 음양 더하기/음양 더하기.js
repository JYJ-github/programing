function solution(absolutes, signs) {
  let result = 0;
  for (let i = 0; i < signs.length; i++) {
    signs[i] ? (result += absolutes[i]) : (result -= absolutes[i]);
  }
  return result;
}
