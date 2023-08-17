export function findFirstPositiveNumber(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array.");
  }

  const positiveNumbers = arr.filter((num) => num > 0);

  if (positiveNumbers.length > 0) {
    return positiveNumbers[0];
  } else {
    return undefined;
  }
}

export const findCommonElement = (arr1, arr2) => {
  if (!Array.isArray(arr1) && !Array.isArray(arr2))
    throw new Error("Input must be an array.");
  return arr1.find((item) => arr2.includes(item));
};
