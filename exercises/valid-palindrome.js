/**
 * Given a string, return whether or not it forms a palindrome
 * ignoring case and non-alphabetical characters.
 */

export const validPalindrome = (input) => {
  if (!input) {
    return "string not valid";
  }

  const lowerCaseInput = input.toLowerCase().replace(/[^\w]/g, "");
  const length = lowerCaseInput.length;
  const isEven = length % 2 === 0;

  const firstHalf = lowerCaseInput.substring(0, length / 2);
  const secondHalf = lowerCaseInput
    .substring(isEven ? length / 2 : length / 2 + 1, length)
    .split("")
    .reverse()
    .join("");

  if (firstHalf === secondHalf) return true;
  return false;
};
