const solution = (arr) => {
  if (arr.length === 1) {
    return [-1];
  } else {
    const copyArr = [...arr];
    const num = copyArr.sort((a, b) => a - b)[0];
    const secondNum = arr.findIndex((value) => value === num);
    arr.splice(secondNum, 1);
    return arr;
  }
};