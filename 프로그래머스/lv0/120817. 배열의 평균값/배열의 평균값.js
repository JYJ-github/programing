//reduce메소드 연습
const solution = (number) => {
  return (
    number.reduce((suminitial, currentValue) => suminitial + currentValue, 0) /
    number.length
  );
};