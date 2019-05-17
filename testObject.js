// Declared before testObject object so that it can be copied on to multiple keys of testFunction object
var testObjectWithKey = {
  one: 1
}

var testObject = {
  notShallowCopyOfTestObjectWithKey: {
    one: 1
  },
  shallowCopyOfTestObjectWithKey: testObjectWithKey,
  testArray: ['testValue'],
  testDefined: 'testDefined',
  testFalsey: '',
  testFunction: function(a,b){
    return a + b;
  },
  testFunctionWithError: function(){
    throw new TypeError('Test error message.');
  },
  testFloatingPointNumber: 0.3,
  testNull: null,
  testNumber: 1,
  testObjectWithKey: testObjectWithKey,
  testString: 'string',
  testTruthy: 'truthy',
  testUndefined: undefined
}

module.exports = testObject;