/**
  js-plain - definitions and arguments
    - basic examples for defining and calling variables
**/

// assign new function a variable
var testFunction = function (message) {
  return "function as a variable: "+message;
}

// create array
var testArray = [];
// push function to test array
testArray.push(function(message) {
  return "function pushed to array: "+message;
});
// push second function to test array
testArray.push(function(data) {
  let calculation = data * 10;
  return "2nd function pushed to array: total = "+calculation;
});

// create object
var testObject = {};
// assign function to object
testObject.testFunction = function(message) {
  return "3rd function as property of an object: "+ message;
};

// output return from testFunction
console.log(testFunction("hello, how are you?"));
//simple output return from testArray function
console.log(testArray[0]("hello again..."));
// output calculation using 2nd return from testArray function
console.log(testArray[1](15));
// output return from testObject
console.log(testObject.testFunction("I bring you greetings..."));
