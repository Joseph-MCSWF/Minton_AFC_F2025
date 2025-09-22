const { add, subtract } = require('../src/calculator.js');
describe("Calculator", () => {
    describe("Addition", () => {
        test("adds two positive numbers", () => {
            expect(add(2, 3)).toBe(5);
        });
        test("adds a positive and a negative number", () => {
            expect(add(5, -2)).toBe(3);
        });
    });
    describe("Subtraction", () => {
        test("subtracts two positive numbers", () => {
            expect(subtract(10, 4)).toBe(6);
        });
        test("subtracts a larger number from a smaller number", () => {
            expect(subtract(3, 7)).toBe(-4);
        });
    });
});