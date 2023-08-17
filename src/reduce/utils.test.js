import {
  countPositiveNumbers,
  findMaxNumber,
  flattenNestedArrays,
  groupByProperty
} from "./utils";

describe("Tests for Reduce Utilities", () => {
  //Tests for findMaxNumber();
  describe("Tests for findMaxNumber()", () => {
    // #Test 1
    test("Find maximum in a positive number array", () => {
      const result = findMaxNumber([3, 7, 2, 9, 5]);
      expect(result).toBe(9);
    });
    // #Test 2
    test("Find maximum in a negative number array", () => {
      const result = findMaxNumber([-3, -7, -2, -9, -5]);
      expect(result).toBe(-2);
    });
    // #Test 3
    test("Find maximum in an array with identical elements", () => {
      const result = findMaxNumber([7, 7, 7, 7]);
      expect(result).toBe(7);
    });
    // #Test 4
    test("Ensure original array remains unchanged", () => {
      const originalArgs = [3, 7, 2, 9, 5];
      const result = findMaxNumber(originalArgs);
      expect(originalArgs).not.toEqual(result);
    });
    // #Test 5
    test("Find maximum in an array with decimal numbers", () => {
      const result = findMaxNumber([3.5, 7.2, 2.1, 9.7, 5.3]);
      expect(result).toBe(9.7);
    });
    // #Test 6
    test("Find maximum in an empty array", () => {
      const result = findMaxNumber([]);
      expect(result).toBe(undefined);
    });
  });

  //Tests for countPositiveNumbers();
  describe("Tests for countPositiveNumbers()", () => {
    // #Test 1
    test("Count positive numbers in an array with mixed numbers", () => {
      const result = countPositiveNumbers([3, -7, 1, 9, -5]);
      expect(result).toBe(3);
    });
    // #Test 2
    test("Count positive numbers in an array with all positive numbers	", () => {
      const result = countPositiveNumbers([3, 7, 2, 9, 5]);
      expect(result).toBe(5);
    });
    // #Test 3
    test("Count positive numbers in an array with all negative numbers", () => {
      const result = countPositiveNumbers([-3, -7, -2, -9, -5]);
      expect(result).toBe(0);
    });
    // #Test 4
    test("Count positive numbers in an array with all negative numbers", () => {
      const result = countPositiveNumbers([3.5, 7.2, -2.1, 9.7, -5.3]);
      expect(result).toBe(3);
    });
  });

  //Tests for flattenNestedArrays();
  describe("Tests for flattenNestedArrays()", () => {
    // #Test 1
    test("Flatten nested arrays with mixed elements", () => {
      const result = flattenNestedArrays([
        [1, 2],
        [3, 4],
        [5, 6]
      ]);
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });
    // #Test 2
    test("Flatten nested arrays with arrays of different lengths", () => {
      const result = flattenNestedArrays([[1, 2], [3, 4, 5], [6]]);
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });
    // #Test 3
    test("Flatten nested arrays with empty arrays	", () => {
      const result = flattenNestedArrays([[], [], []]);
      expect(result).toEqual([]);
    });
    // #Test 4
    test("Flatten nested arrays with arrays containing non-numeric elements	", () => {
      const result = flattenNestedArrays([
        [1, 2],
        ["a", "b"],
        [3, 4]
      ]);
      expect(result).toEqual([1, 2, "a", "b", 3, 4]);
    });
    // #Test 5
    test("Flatten an empty array of nested arrays	", () => {
      const result = flattenNestedArrays([]);
      expect(result).toEqual([]);
    });
    // #Test 6
    test("Ensure original nested arrays remain unchanged", () => {
      const orignalArgs = [
        [1, 2],
        [3, 4],
        [5, 6]
      ];
      const result = flattenNestedArrays(orignalArgs);
      expect(orignalArgs).not.toBe(result);
    });
    // #Test 7
    test("Check if the function throws an error with invalid input", () => {
      const result = () => flattenNestedArrays("invalid");
      expect(result).toThrow(TypeError);
      expect(result).toThrow("Invalid Input Type");
    });
  });

  //Tests for groupByProperty()
  describe("Tests for groupByProperty()", () => {
    // #Test 1
    test("Group objects by an existing property	", () => {
      const students = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Carol", age: 25 }
      ];
      const result = groupByProperty(students, "age");
      expect(result).toEqual({
        25: [
          { name: "Alice", age: 25 },
          { name: "Carol", age: 25 }
        ],
        30: [{ name: "Bob", age: 30 }]
      });
    });
    // #Test 2
    test("Group objects by an empty property", () => {
      const students = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Carol", age: 25 }
      ];
      const result = groupByProperty(students, "");
      expect(result).toEqual({
        "": [
          { name: "Alice", age: 25 },
          { name: "Bob", age: 30 },
          { name: "Carol", age: 25 }
        ]
      });
    });
    // #Test 3
    test("Group objects by an empty property", () => {
      const result = groupByProperty([], "age");
      expect(result).toEqual({});
    });
  });
});
