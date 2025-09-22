const isPalindrome = require('../src/isPalindrome');

describe('isPalindrome – non-string inputs return false', () => {
    test.each([
        ['number', 123],
        ['float', 3.14],
        ['boolean true', true],
        ['boolean false', false],
        ['null', null],
        ['undefined', undefined],
        ['object', { a: 1 }],
        ['array', [1,2,1]],
        ['function', () => {}],
        ['symbol', Symbol('x')],
    ])('%s', (_label, input) => {
        expect(isPalindrome(input)).toBe(false);
    });

    test('empty string is false (by policy)', () => {
        expect(isPalindrome('')).toBe(false);
    });
});

describe('isPalindrome – basic words', () => {
    test.each([
        ['bob', true],
        ['racecar', true],
        ['apple', false],
    ])('%s', (word, expected) => {
        expect(isPalindrome(word)).toBe(expected);
    });
});

describe('isPalindrome – case/punctuation/spacing', () => {
    test('case-insensitive', () => {
        expect(isPalindrome('RaceCar')).toBe(true);
    });

    test("ignores spaces & punctuation: Madam I'm Adam.", () => {
        expect(isPalindrome("Madam I'm Adam.")).toBe(true);
    });

    test('ignores spaces & punctuation: Red rum, sir, is murder.', () => {
        expect(isPalindrome('Red rum, sir, is murder.')).toBe(true);
    });
});
