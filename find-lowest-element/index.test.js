const findLowestElement = require(".")

describe("find lowest element", () => {
    test("find lowest from integer array", () => expect(findLowestElement([3, 7, 2, 9, 1])).toBe(1))
    test("find lowest from single element array", () => expect(findLowestElement([10])).toBe(10))
    test("find lowest from nagatice element array", () => expect(findLowestElement([-5, -2, -10, -1])).toBe(-10))
    test("find lowest from floating element array", () => expect(findLowestElement([8.1, 8.5, 8.7, 8.9])).toBe(8.1))
    test("find lowest from string", () => expect(findLowestElement("hii")).toBe(0))
    test("find lowest from empty array", () => expect(findLowestElement([])).toBe(0))
})