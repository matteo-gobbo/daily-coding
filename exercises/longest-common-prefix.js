/**
 * Given an array of strings, return the longest common prefix that is shared amongst all strings.
 * Note: you may assume all strings only contain lowercase alphabetical characters.
 */

export const longestCommonPrefix = (inputStrings) => {
  let size = inputStrings.length;

  if (size == 0) return "";
  if (size == 1) return inputStrings[0];

  inputStrings.sort();
  const first = inputStrings[0];
  const last = inputStrings[inputStrings.length - 1];

  const maxLength = Math.min(first.length, last.length);
  let i = 0;
  while (i < maxLength && first[i] === last[i]) {
    i++;
  }

  const longestCommonPrefix = first.substring(0, i);

  return longestCommonPrefix;
};
