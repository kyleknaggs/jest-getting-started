const sum = require('./sum');

// Tests based on Using matchers documentation:
// https://jestjs.io/docs/en/using-matchers

// Tests for exact equality ----------------

test('two plus two is four', () => {
  expect(1 + 2).toBe(3);
});

// Test for exact equality using imported function:
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// Test for exact equality using modified arguments:
test('two plus two is four', () => {
  expect(sum(2, 2)).toBe(4);
});

// Test for what the value should not be:
test('two plus two is four', () => {
  expect(2 + 2).not.toBe(5);
});

// Can test for values inside of objects:
test('object assignment', () => {
  const data = {
    one: 1
  };
  expect(data.one).toBe(1);
});

// Tests for "the value of an object" ----------------

test('object assignment', () => {
  const data = {
    one: 1
  };
  expect(data).toEqual({ one: 1});
});

// Test after modifying object:
test('object assignment', () => {
  const data = {
    one: 1
  };
  data.two = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// Can test for what object should not be:
test('object assignment', () => {
  const data = {
    one: 1
  };
  data.two = 2;
  data.three = 3;
  expect(data).not.toEqual({ one: 1, two: 2 });
});

// TODO: Continue experimenting with tests from the "Truthiness" section