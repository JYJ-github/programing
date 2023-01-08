const solution = (num) => {
  let count = 0;

  const collatz = (num, count) => {
    if (count === 500) {
      return -1;
    }
    if (num === 1) {
      return count;
    } else if (num % 2 === 0) {
      count += 1;
      num /= 2;
      return collatz(num, count);
    } else if (num % 2 === 1) {
      count += 1;
      num = num * 3 + 1;
      return collatz(num, count);
    }
  };

  return collatz(num, count);
};