
const functions = require('../code-to-unit-test/unit-test-me.js');

describe('Unit tests for functions', () => {
    // isPhoneNumber tests
    test('Valid phone number should return true', () => {
        expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
    });

    test('Invalid phone number should return false', () => {
        expect(functions.isPhoneNumber('abc-123')).toBe(false);
    });

    test('Valid phone number with area code should return true', () => {
        expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
    });
    test('Invalid phone number with random digits missing should return false', () => {
        expect(functions.isPhoneNumber('123-456-789')).toBe(false);
    });
    test('Valid email should return true', () => {
        expect(functions.isEmail('test@example.com')).toBe(true);
    });
    test('Invalid email should return false', () => {
        expect(functions.isEmail('test@example')).toBe(false);
    });
    test('Valid email with underscores should return true', () => {
        expect(functions.isEmail('test_email@example.com')).toBe(true);
    });
    test('Invalid email without domain should return false', () => {
        expect(functions.isEmail('test@')).toBe(false);
    });
    test('Valid strong password should return true', () => {
        expect(functions.isStrongPassword('Password123')).toBe(true);
    });

    test('Invalid password with special characters should return false', () => {
        expect(functions.isStrongPassword('P@ssword')).toBe(false);
    });
    test('Valid strong password with minimum length should return true', () => {
        expect(functions.isStrongPassword('Pw1_')).toBe(true);
    });
    test('Invalid password with spaces should return false', () => {
        expect(functions.isStrongPassword('Pass word123')).toBe(false);
    });
    test('Valid date should return true', () => {
        expect(functions.isDate('12/31/2022')).toBe(true);
    });
    test('Invalid date with missing day should return false', () => {
        expect(functions.isDate('12//2022')).toBe(false);
    });
    test('Valid date with single-digit month and day should return true', () => {
        expect(functions.isDate('1/1/2022')).toBe(true);
    });
    test('Invalid date with invalid month should return false', () => {
        expect(functions.isDate('13432/31/2022')).toBe(false);
    });
    test('Valid hex color code should return true', () => {
        expect(functions.isHexColor('#ABC123')).toBe(true);
    });
    test('Invalid hex color code with missing characters should return false', () => {
        expect(functions.isHexColor('#ABCD')).toBe(false);
    });
    test('Valid hex color code without "#" should return true', () => {
        expect(functions.isHexColor('ABCDEF')).toBe(true);
    });
    test('Invalid hex color code with invalid characters should return false', () => {
        expect(functions.isHexColor('#ZZZ123')).toBe(false);
    });
});
