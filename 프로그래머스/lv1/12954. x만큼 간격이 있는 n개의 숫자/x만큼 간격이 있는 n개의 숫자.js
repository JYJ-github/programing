const solution = (x, n) => {
  let arr = new Array(n).fill(x);
  return arr.map((value, index) => value + value * index);
};