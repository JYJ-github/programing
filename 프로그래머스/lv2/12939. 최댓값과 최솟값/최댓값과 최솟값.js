const solution = (s) => {
  let array = s.split(" ").sort((a, b) => a - b);
  let answer = [];
  answer.push(array[0]);
  answer.push(array.at(-1));
  return answer.join(" ");
};