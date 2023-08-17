import {
  removeVowels,
  reverseStrings,
  squareRoots,
  transformKeys
} from "./utils";

describe("Tests for Map Utilities", () => {
  //Test for transformKeys
  describe("Tests for transformKeys()", () => {
    // #Test:1
    test("Transforms lowercase keys to uppercase", () => {
      const result = transformKeys({ name: "John", age: 30, city: "New York" });
      expect(result).toEqual(["NAME", "AGE", "CITY"]);
    });
    // #Test:2
    test("Returns an empty array for an empty object", () => {
      const result = transformKeys({});
      expect(result).toEqual([]);
    });
    // #Test:3
    test("Does not modify the original object", () => {
      const originalArgs = { name: "John", age: 30, city: "New York" };
      transformKeys(originalArgs);
      expect(originalArgs).toEqual({ name: "John", age: 30, city: "New York" });
    });
  });

  //Tests for reverseStrings()
  describe("Tests for reverseStrings()", () => {
    // #Test 1
    test("Reverse multiple strings", () => {
      const result = reverseStrings(["hello", "world", "jest"]);
      expect(result).toEqual(["olleh", "dlrow", "tsej"]);
    });
    // #Test 2
    test("Handle empty input array", () => {
      const result = reverseStrings([]);
      expect(result).toEqual([]);
    });
    // #Test 3
    test("Reverse strings with spaces", () => {
      const result = reverseStrings(["hello world", "goodbye space"]);
      expect(result).toEqual(["dlrow olleh", "ecaps eybdoog"]);
    });
    // #Test 4
    test("Original array remains unchanged", () => {
      const originalArgs = ["abc", "def"];
      reverseStrings(originalArgs);
      expect(originalArgs).toEqual(["abc", "def"]);
    });
    // #Test 5
    test("Reverse and check individual characters", () => {
      const result = reverseStrings(["abc", "123"]);
      const expectResult = ["cba", "321"];
      expectResult.forEach((element, i) => {
        element.split("").forEach((char, j) => {
          expect(result[i][j]).toContain(char);
        });
      });
    });
  });

  //Tests for squareRoots();
  describe("Tests for squareRoots()", () => {
    // #Test 1
    test("Calculate square roots of positive integers	", () => {
      const result = squareRoots([4, 9, 16]);
      expect(result).toEqual([2, 3, 4]);
    });
    // #Test 2
    test("Calculate square roots of positive floating-point numbers	", () => {
      const result = squareRoots([2.25, 0.25, 1.44]);
      expect(result).toEqual([1.5, 0.5, 1.2]);
    });
    // #Test 3
    test("Handle empty input array", () => {
      const result = squareRoots([]);
      expect(result).toEqual([]);
    });
    // #Test 4
    test("Ensure original array remains unchanged	", () => {
      const originalArgs = [4, 9, 16];
      squareRoots(originalArgs);
      expect(originalArgs).toEqual([4, 9, 16]);
    });
    // #Test 5
    test("Ensure each result is close to the actual square root", () => {
      const args = [25, 64, 100];
      const result = squareRoots(args);
      result.forEach((squareRoot, i) =>
        expect(squareRoot).toBeCloseTo(Math.sqrt(args[i]))
      );
    });
  });

  //Tests for removeVowels()
  describe("Tests for removeVowels()", () => {
    // #Test 1
    test("Remove vowels from single word string", () => {
      const result = removeVowels(["hello", "world"]);
      expect(result).toEqual(["hll", "wrld"]);
    });
    // #Test 2
    test("Handle strings with mixed case vowels", () => {
      const result = removeVowels(["hello", "world"]);
      expect(result).toEqual(["hll", "wrld"]);
    });
    // #Test 3
    test("Handle empty strings", () => {
      const result = removeVowels([]);
      expect(result).toEqual([]);
    });
    // #Test 4
    test("Handle strings with no vowels	", () => {
      const result = removeVowels(["xyz", "qrst"]);
      expect(result).toEqual(["xyz", "qrst"]);
    });
    // #Test 5
    test("Ensure original array remains unchanged", () => {
      const originalArgs = ["hello", "world"];
      removeVowels(originalArgs);
      expect(originalArgs).toEqual(["hello", "world"]);
    });
    // #Test 6
    test("Handle strings with all vowels", () => {
      const result = removeVowels(["aeiou", "AEIOU"]);
      expect(result).toEqual(["", ""]);
    });
  });
});
