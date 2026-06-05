const findAvrageOfElements = require(".");

const inputs = [
    { input: [10, 20, 30, 40], output: 25 },
    { input: [5], output: 5 },
    { input: [1, 2, 3, 4, 5], output: 3 },
    { input: [-10, -20, -30], output: -20 },
    { input: [0, 0, 0, 0], output: 0 },
    { input: [5, -5], output: 0 },
    { input: [1, 2], output: 1.5 },
    { input: [], output: null }
];

describe("find avg of elements", () => {
    inputs.map(({ input, output }) => test("find avrage of array", () => expect(findAvrageOfElements(input)).toBe(output)))
});