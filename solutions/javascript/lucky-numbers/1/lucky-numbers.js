// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {

  // Convert first array of digits into a number
  const arrayOneNumber = Number(array1.join(""));

  // Convert second array of digits into a number
  const arrayTwoNumber = Number(array2.join(""));

  // Return the sum of both numbers
  return arrayOneNumber + arrayTwoNumber;

}


/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const numberString = value.toString();
  const numbersArray = numberString.split("");
  const reverseArray = numbersArray.reverse();
  const joinedArray = reverseArray.join('');
  if (joinedArray === numberString) {
    return true;
  } else {
    return false;
  }
  }

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
if (input === null || input === undefined || input === "") {
  return "Required field";
} else if (isNaN(input) || input == 0) {
  return "Must be a number besides 0";
} else {
  return "";
}

}
