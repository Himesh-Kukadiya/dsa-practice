const sum = require(".");

describe("sum function", () => {
    test('add two positive number', () => {
        expect(sum(5, 3)).toBe(8);
    });

    test('add two nagative numbers', () => {
        expect(sum(-5, -3)).toBe(-8)
    });

    test('add zero', () => {
        expect(sum(0, 0)).toBe(0)
    });
})