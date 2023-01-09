const solution = (phone_number) => {
  answer = phone_number.slice(-4);
  return "*".repeat(phone_number.length - 4) + answer;
};