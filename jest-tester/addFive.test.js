const addFive = require('./addFive');

// Write the first test
test('returns the number plus 5', () => {
    expect(addFive(1)).toBe(6)
});