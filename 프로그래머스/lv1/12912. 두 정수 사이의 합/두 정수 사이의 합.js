const solution = (a, b) => {
  if (b >= a) {
    const answer = new Array(Math.abs(a - b) + 1)
      .fill(a)
      .map((value, index) => value + index)
      .reduce((acc, cur) => acc + cur, 0);
    return answer;
  } else {
    const answer = new Array(Math.abs(a - b) + 1)
      .fill(b)
      .map((value, index) => value + index)
      .reduce((acc, cur) => acc + cur, 0);
    return answer;
  }
};