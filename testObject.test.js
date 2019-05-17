const testObject = require('./testObject');
const {
  notShallowCopyOfTestObjectWithKey,
  shallowCopyOfTestObjectWithKey,
  testArray,
  testDefined,
  testFalsey,
  testFloatingPointNumber,
  testFunction,
  testFunctionWithError,
  testNull,
  testNumber,
  testObjectWithKey,
  testString,
  testTruthy,
  testUndefined,
} = testObject;

// Testing the list of "Common matches" provided by the Jest "Using Matchers" documentation page:
// https://jestjs.io/docs/en/using-matchers

// Without and with imported values ----------------
test('If value is not from an imported function.', function(){
  expect(1 + 2).toBe(3);
});

test('If value is from an imported function.', function(){
  expect(testFunction(1, 2)).toBe(3);
});

// Should and should not ----------------
// toBe() - What a value should be.
// .not.toBe() - What a value should not be.
test('If value should be.', function(){
  expect(testFunction(2, 2)).toBe(4);
});

test('If value should not be.', function(){
  expect(testFunction(2,2)).not.toBe(5);
});

// Objects ----------------

test('If value is inside of testObjects.', function(){
  expect(testObjectWithKey.one).toBe(1);
});

// Exact equality and values ----------------
// toEqual() - Tests for value only.
// toBe() - Tests exact equality of two values.
// toBe() uses Object.is() for comparisons.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is

test('If testObjectWithKey has exact equality.', function () {
  expect(testObjectWithKey).toBe(shallowCopyOfTestObjectWithKey);
});

test('If testObjectWithKey does not have exact equality.', function () {
  expect(testObjectWithKey).not.toBe(notShallowCopyOfTestObjectWithKey);
});

test('If testObjectWithKey does not have exact equality, but has same values.', function () {
  expect(testObjectWithKey).toEqual(notShallowCopyOfTestObjectWithKey);
});

// Arrays and Iterables ----------------
// Can check if array contains an item using toContain()
// toContain()
// Question: What exactly are "iterables"?

test("If array contains an element.", function () {
  expect(testArray).toContain('testValue');
});

// Null, Undefined and defined  ----------------
// toBeNull()
// toBeUndefined()
// toBeDefined()

test("If value is null.", function(){
  expect(testNull).toBeNull();
});

test("If value is undefined.", function(){
  expect(testUndefined).toBeUndefined();
});

test("If value is defined.", function(){
  expect(testDefined).toBeDefined();
});

// Truthy and Falsey  ----------------
// toBeTruthy()
// toBeFalsey()

test("If value is truthy.", function(){
  expect(testTruthy).toBeTruthy();
});

test("If value is falsey.", function(){
  expect(testFalsey).toBeFalsy();
});

// Numbers  ----------------
// Most number comparisons have matcher equivalents.
// toBeGreaterThan()
// toBeGreaterThanOrEqualTo()
// toBeLessThan()
// toBeLessThanOrEqualTo()

test('If value is greater than.', function(){
  expect(testNumber).toBeGreaterThan(0);
});

test('If value is greater than or equal to.', function(){
  expect(testNumber).toBeGreaterThanOrEqual(0);
  expect(testNumber).toBeGreaterThanOrEqual(1);
});

test('If value is less than.', function(){
  expect(testNumber).toBeLessThan(2);
});

test('If value is less than or equal to.', function(){
  expect(testNumber).toBeLessThanOrEqual(1);
  expect(testNumber).toBeLessThanOrEqual(2);
});

// Floating Point Numbers ----------------
// toBeCloseTo is preferred to toEqual() or toBe().
// Ensures that tests don't fail because of tiny rounding errors.
// toBeCloseTo()

test("If value is a floating point number.", function(){
  expect(testFloatingPointNumber).toBeCloseTo(0.1 + 0.2);
});

test("If value is a floating point number and toEqual is used.", function(){
  expect(testFloatingPointNumber).not.toEqual(0.1 + 0.2);
});

test("If value is a floating point number and toBe is used.", function(){
  expect(testFloatingPointNumber).not.toBe(0.1 + 0.2);
});

// Strings ----------------
// Can be checked against regular expressions with toMatch().
// toMatch()

test("If string contains a letter.", function(){
  expect(testString).toMatch("s");
  expect(testString).toMatch("g");
  expect(testString).toMatch("string");
});

// Exceptions ----------------
// Errors, error types, error messages can be checked with toThrow().
// toThrow()

test("If thrown error.", function(){
  expect(testFunctionWithError).toThrow();
});

test("If error has type.", function(){
  expect(testFunctionWithError).toThrow(TypeError);
});

test("If error has message.", function(){
  expect(testFunctionWithError).toThrow('Test error message.');
});

test("If message contains string that can be targeted with regular expression.", function(){
  expect(testFunctionWithError).toThrow(/error/);
});