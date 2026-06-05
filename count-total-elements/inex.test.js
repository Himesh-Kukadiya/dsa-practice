const countElement = require(".");

describe("count Element function", () => {
    test('count element of integer array', () => {
        expect(countElement([1, 2, 3])).toBe(3)
    });

    test('count element of blank array', () => {
        expect(countElement([])).toBe(0)
    })

    test('count element of string array', () => {
        expect(countElement(['a', 'b', 'c', 'd'])).toBe(4)
    })

    test('count element of string', () => {
        expect(countElement("hello")).toBe("Please provide valid array")
    })
});