import { findCommonElement } from "./utils";
import { filterLongStrings, findFirstPositiveNumber } from "./utils";

describe("Tests for Find Utilities", () => {
  //Tests for findFirstPositiveNumber()
  describe("Tests for findFirstPositiveNumber()", () => {
    // #Test 1
    test("Find first positive number	", () => {
      const result = findFirstPositiveNumber([3, 7, -2, 9, -5]);
      expect(result).toBe(3);
    });
    // #Test 2
    test("Find first positive number in an array with only negative numbers", () => {
      const result = findFirstPositiveNumber([-3, -7, -2, -9, -5]);
      expect(result).toBeUndefined();
    });
    // #Test 3
    test("Find first positive number in an array with decimal numbers	", () => {
      const result = findFirstPositiveNumber([3.5, 7.2, 2.1, 9.7, 5.3]);
      expect(result).toBe(3.5);
    });
    // #Test 4
    test("Check if the function throws an error with invalid input", () => {
      const result = () => findFirstPositiveNumber("invalid");
      expect(result).toThrow("Input must be an array.");
    });
  });

  //Test for findCommonElement()
  describe("Tests for findCommonElement()", () => {
    // #Test 1
    test("Find a common element	", () => {
      const result = findCommonElement([2, 4, 6, 8, 10], [5, 7, 8, 10, 12]);
      expect(result).toBe(8);
    });
    // #Test 2
    test("Find a common element in arrays with no common elements", () => {
      const result = findCommonElement([2, 4, 6], [5, 7, 9]);
      expect(result).toBeUndefined();
    });
    // #Test 3
    test("Find a common element when one array is empty	", () => {
      const result = findCommonElement([], [5, 7, 8, 10, 12]);
      expect(result).toBeUndefined();
    });
    // #Test 4
    test("Find a common element when one array is empty	", () => {
      const result = findCommonElement([], []);
      expect(result).toBeUndefined();
    });
    // #Test 5
    test("Check if the function throws an error with invalid input", () => {
      const result = () => findCommonElement("invalid1", "invalid2");
      expect(result).toThrow("Input must be an array");
    });
  });
});
