function solution(n) {
  result = 0;
  for (i = 0; i < String(n).length; i++) {
    result += Number(String(n)[i]);
  }
  return result;
}
