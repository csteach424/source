/**
* test.js - generators - basic 1 - version 3
    - using basic generators to output data
    - creating and using an iterator
**/

//generator function
function* NameGenerator() {
  yield "emma";
}

// create an iterator object
const nameIterator = NameGenerator();

// get a new value from the generator with the 'next' method
const name1 = nameIterator.next();

// output value from generator
console.log(name1.value);

// check if another call to next is required to finish generator...
if (name1.done === false) {
  console.log("more necessary...");
  const name2 = nameIterator.next();
  console.log(name2.done + " - now done");
}
