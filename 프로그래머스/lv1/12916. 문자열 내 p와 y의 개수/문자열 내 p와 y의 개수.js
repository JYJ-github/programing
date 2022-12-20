const solution = (s) => {
  const arrayS = s.split("");
  const countP = arrayS.filter(
    (value) => value === "p" || value === "P"
  ).length;
  const countY = arrayS.filter(
    (value) => value === "y" || value === "Y"
  ).length;

  return countP === countY;
};