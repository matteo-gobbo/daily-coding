/**
 * Given two binary strings (strings containing only 1s and 0s) return their sum (also as a binary string).
 * Note: neither binary string will contain leading 0s unless the string itself is 0
 */

const calcSum = (num) => {
  let pow = num.length - 1;
  let sum = 0;

  for (let i = 0; i <= num.length - 1; i++) {
    sum += Number(num[i]) * Math.pow(2, pow);
    pow--;
  }

  return sum;
};

export const addBinary = (num1, num2) => {
  const sum1 = calcSum(num1);
  const sum2 = calcSum(num2);

  const sum = sum1 + sum2;
  return sum.toString(2);
};
