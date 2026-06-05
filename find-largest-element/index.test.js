const findMaxElement = require(".")

describe("find max element from an array", () => {
    test("find max element from integer array", () => expect(findMaxElement([1, 6, 4, 3])).toBe(6))
    test("find max element from floating array", () => expect(findMaxElement([4.5, 8.2, 8.9, 7.2])).toBe(8.9))
    test("find max element from nagatice array", () => expect(findMaxElement([-1, -6, -4, -3])).toBe(-1))
    test("find max element from blank array", () => expect(findMaxElement([])).toBe(0))
    test("find max element from non array", () => expect(findMaxElement("i am not array")).toBe(0))
})