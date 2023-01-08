const solution = (n) => {
  const array = new Array(n).fill(1).map((value, index) => value + index);
  return array.map((value) => n % value).findIndex((value) => value === 1) + 1;
};