/**
 * Given a string, reverse all of its characters and return the resulting string.
 */

export const reverseStringFirstSolution = (s) => {
  if (!s) {
    return "string not valid";
  }

  return s.split("").reverse().join("");
};

export const reverseStringSecondSolution = (s) => {
  if (!s) {
    return "string not valid";
  }

  let reversedString = "";
  for (let i = s.length - 1; i >= 0; i--) {
    reversedString += s[i];
  }
  return reversedString;
};
