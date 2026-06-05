const sumOfElements = require(".");

describe("sumOfElements", () => {
    test("sum of array element", () => expect(sumOfElements([1, 2, 3, 4])).toBe(10));

    test("only one element", () => expect(sumOfElements([10])).toBe(10));

    test("sum of 0 element", () => expect(sumOfElements([])).toBe(0));

    test("sum of negative elements", () => expect(sumOfElements([-1, -2, -3])).toBe(-6))

    test("sum of nagative and positive elements", () => expect(sumOfElements([5, -2, 3])).toBe(6));

    test("sum of the float element", () => expect(sumOfElements([1.5, 2.5])).toBe(4));
});