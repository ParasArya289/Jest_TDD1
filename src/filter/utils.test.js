// import { extended } from "jest-extended";

import {
  filterByProperties,
  filterEvenAndPositive,
  filterLongStrings,
  isPalindromic,
  palindromicNumbers
} from "./utils";

describe("Tests for Filter Utilities", () => {
  //Tests for filterLongStrings()\
  describe("Tests for filterLongStrings()", () => {
    // #Test 1
    test("Filters strings longer than minimum length", () => {
      const result = filterLongStrings(
        ["apple", "banana", "cherry", "date"],
        5
      );
      expect(result).toEqual(["banana", "cherry"]);
    });
    // #Test 2
    test("Handles empty input array", () => {
      const result = filterLongStrings([], 3);
      expect(result).toEqual([]);
    });
    // #Test 3
    test("Handles empty output array", () => {
      const result = filterLongStrings(["cat", "dog", "rat"], 3);
      expect(result).toEqual([]);
    });
    // #Test 4
    test("Handles negative minimum length", () => {
      const result = filterLongStrings(["hello", "world"], -2);
      expect(result).toEqual(["hello", "world"]);
    });
    // #Test 5
    test("Ensures original array remains unchanged", () => {
      const originalArrArgs = ["apple", "banana", "cherry"];
      const result = filterLongStrings(originalArrArgs, 4);
      expect(originalArrArgs).not.toBe(result);
      expect(originalArrArgs).toEqual(["apple", "banana", "cherry"]);
    });
    // #Test 6
    test("Checks if the filtered array is empty	", () => {
      const result = filterLongStrings(
        ["apple", "banana", "cherry", "date"],
        10
      );
      expect(result).toHaveLength(0);
    });
    // #Test 7
    test("Checks if the function throws an error with invalid input", () => {
      const result = () => {
        filterLongStrings("invalid", 5);
      };
      expect(result).toThrow(TypeError);
      expect(result).toThrow("Invalid Input Type");
    });
  });

  //Tests for filterEvenAndPositive();
  describe("Tests for filterEvenAndPositive", () => {
    // #Test 1
    test("Filters even and positive numbers	", () => {
      const result = filterEvenAndPositive([2, 4, -6, 8, 9, -10, 11]);
      expect(result).toEqual([2, 4, 8]);
    });
    // #Test 2
    test("Handles empty input array	", () => {
      const result = filterEvenAndPositive([]);
      expect(result).toEqual([]);
    });
    // #Test 3
    test("Handles input with no even and positive numbers", () => {
      const result = filterEvenAndPositive([-3, -5, -7]);
      expect(result).toEqual([]);
    });
    // #Test 4
    test("Handles input with only positive but odd numbers", () => {
      const result = filterEvenAndPositive([1, 3, 5, 7]);
      expect(result).toEqual([]);
    });
    // #Test 4
    test("Checks if the output array contains only even and positive numbers", () => {
      const result = filterEvenAndPositive([2, 4, -6, 8, 9, -10, 11]).every(
        (el) => !(el % 2) && el > 0
      );
      expect(result).toBe(true);
    });
    // #Test 5
    test("Checks if the output array length is correct", () => {
      const result = filterEvenAndPositive([2, 4, -6, 8, 9, -10, 11]);
      expect(result).toHaveLength(3);
    });
    // #Test 6
    test("Checks if the filtered array does not contain negative numbers", () => {
      const result = filterEvenAndPositive([2, 4, -6, 8, 9, -10, 11]);
      result.forEach((el) => {
        if (el < 0) {
          expect(result).not.toContain(el);
        }
      });
      // #Test 7
      test("Checks if the function throws an error with invalid input	", () => {
        const result = () => {
          filterEvenAndPositive("invalid");
        };
        expect(result).toThrow(TypeError);
        expect(result).toThrow("Invalid Input Type");
      });
    });
  });

  //Tests for isPalindromic()
  describe("Tests for isPalindromic() ", () => {
    // #Test 1
    test("Check for a palindromic number", () => {
      const result = isPalindromic(121);
      expect(result).toBe(true);
    });
    // #Test 2
    test("Check for a non-palindromic number", () => {
      const result = isPalindromic(123);
      expect(result).toBe(false);
    });
    // #Test 3
    test("Check for a single-digit number", () => {
      const result = isPalindromic(5);
      expect(result).toBe(true);
    });
  });

  //Tests for palindromicNumbers()
  describe("Tests for palindromicNumbers()", () => {
    // #Test 1
    test("Filter palindromic numbers from the provided array", () => {
      const result = palindromicNumbers([121, 123, 1331, 454, 678, 898]);
      expect(result).toEqual([121, 1331, 454, 898]);
    });
    // #Test 2
    test("Filter palindromic numbers from an empty array", () => {
      const result = palindromicNumbers([]);
      expect(result).toEqual([]);
    });
    // #Test 3
    test("Filter palindromic numbers from an array with no palindromic numbers	", () => {
      const result = palindromicNumbers([123, 456, 789]);
      expect(result).toEqual([]);
    });
    // #Test 4
    test("Ensure the filtered array contains only palindromic numbers", () => {
      const args = [121, 1331, 454, 898];
      const result = palindromicNumbers(args);
      const test = args.every((el, i) => el === result[i]);
      expect(test).toEqual(true);
    });
    // #Test 5
    test("Check if the filtered array length is correct", () => {
      const result = palindromicNumbers([121, 1331, 454, 898]);
      expect(result).toHaveLength(4);
    });
    // #Test 6
    test("Check if the filtered array is an array", () => {
      const result = palindromicNumbers([121, 1331, 454, 898]);
      expect(result).toBeInstanceOf(Array);
    });
  });

  //Tests for filterByProperties()
  describe("Tests for filterByProperties()", () => {
    // #Test 1
    test("Filter items based on criteria", () => {
      const items = [
        { name: "Item 1", price: 10, category: "A" },
        { name: "Item 2", price: 25, category: "B" },
        { name: "Item 3", price: 10, category: "A" },
        { name: "Item 4", price: 15, category: "C" }
      ];
      const result = filterByProperties(items, { price: 10, category: "A" });
      expect(result).toEqual([
        { name: "Item 1", price: 10, category: "A" },
        { name: "Item 3", price: 10, category: "A" }
      ]);
    });
    // #Test 2
    test("Ensure original array remains unchanged", () => {
      const items = [
        { name: "Item 1", price: 10, category: "A" },
        { name: "Item 2", price: 25, category: "B" },
        { name: "Item 3", price: 10, category: "A" },
        { name: "Item 4", price: 15, category: "C" }
      ];
      filterByProperties(items, { price: 10, category: "A" });
      expect(items).not.toEqual([
        { name: "Item 1", price: 10, category: "A" },
        { name: "Item 3", price: 10, category: "A" }
      ]);
    });
    // #Test 3
    test("Check if filtered array includes certain items	", () => {
      const items = [
        { name: "Item 1", price: 10, category: "A" },
        { name: "Item 2", price: 25, category: "B" },
        { name: "Item 3", price: 10, category: "A" },
        { name: "Item 4", price: 15, category: "C" }
      ];
      const result = filterByProperties(items, { price: 10, category: "A" });
      expect(result).toContainEqual({
        name: "Item 1",
        price: 10,
        category: "A"
      });
      expect(result).toContainEqual({
        name: "Item 3",
        price: 10,
        category: "A"
      });
    });
    // #Test 4
    test("Check if filtered array includes certain items	", () => {
      const items = [
        { name: "Item 1", price: 10, category: "A" },
        { name: "Item 2", price: 25, category: "B" },
        { name: "Item 3", price: 10, category: "A" },
        { name: "Item 4", price: 15, category: "C" }
      ];
      const result = filterByProperties(items, { price: 10, category: "A" });
      expect(result).not.toContainEqual({
        name: "Item 2",
        price: 25,
        category: "B"
      });
      expect(result).not.toContainEqual({
        name: "Item 4",
        price: 15,
        category: "C"
      });
    });
    // #Test 5
    test("Check if the filtered array length is correct", () => {
      const items = [
        { name: "Item 1", price: 10, category: "A" },
        { name: "Item 2", price: 25, category: "B" },
        { name: "Item 3", price: 10, category: "A" },
        { name: "Item 4", price: 15, category: "C" }
      ];
      const result = filterByProperties(items, { price: 10, category: "A" });
      expect(result).toHaveLength(2);
    });
    // #Test 6
    test("Check if the filtered array is an array", () => {
      const items = [
        { name: "Item 1", price: 10, category: "A" },
        { name: "Item 2", price: 25, category: "B" },
        { name: "Item 3", price: 10, category: "A" },
        { name: "Item 4", price: 15, category: "C" }
      ];
      const result = filterByProperties(items, { price: 10, category: "A" });
      expect(result).toBeInstanceOf(Array);
    });
    // #Test 7
    test("Check if the filtered array is not empty", () => {
      const items = [
        { name: "Item 1", price: 10, category: "A" },
        { name: "Item 2", price: 25, category: "B" },
        { name: "Item 3", price: 10, category: "A" },
        { name: "Item 4", price: 15, category: "C" }
      ];
      const result = filterByProperties(items, { price: 10, category: "A" });
      expect(result).not.toHaveLength(0);
    });
  });
});
