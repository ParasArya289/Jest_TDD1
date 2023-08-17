export const filterLongStrings = (strings, minLength) => {
  if (!Array.isArray(strings)) throw new TypeError("Invalid Input Type");
  return strings.filter((str) => str.length > minLength);
};

export const filterEvenAndPositive = (arr) => {
  if (!Array.isArray(arr)) throw new TypeError("Invalid Input Type");
  return arr.filter((num) => num % 2 === 0).filter((num) => num > 0);
};

export const isPalindromic = (num) => {
  const strNum = num.toString();
  return strNum === strNum.split("").reverse().join("");
};

export const palindromicNumbers = (numbers) => {
  return numbers.filter(isPalindromic);
};

export const filterByProperties = (objects, properties) => {
  return objects.filter((obj) => {
    for (const key in properties) {
      if (obj[key] !== properties[key]) {
        return false;
      }
    }
    return true;
  });
};
