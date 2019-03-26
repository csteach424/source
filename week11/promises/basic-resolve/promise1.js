/*
* promise1.js
* wrap Array in Promise using resolve()...
*/

let testArray = Promise.resolve(['one', 'two', 'three']);

testArray.then(value => {
console.log(value[0]);
// remove first item from array
value.shift();
// pass value to chained `then`
return value;
})
.then(value => console.log(value[0]));
