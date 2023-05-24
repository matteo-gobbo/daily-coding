/**
 *  Given a string, return whether or not it uses capitalization correctly.
 *  A string correctly uses capitalization if all letters are capitalized, no letters are capitalized, or only the first letter is capitalized.
 */

export const correctCapitalization = (input) => {
  const isUppercasePattern = /^[A-Z]+$/;
  const isUppercase = isUppercasePattern.test(input);

  const isLowercasePattern = /^[a-z]+$/;
  const isLowercase = isLowercasePattern.test(input);

  const isPascalCasePattern = /^[A-Z][a-z]*$/;
  const isPascalCase = isPascalCasePattern.test(input);

  return isUppercase || isLowercase || isPascalCase;
};
