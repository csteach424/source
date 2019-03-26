/**
* test.js - generators - basic iterator over object
    - using basic generators to output data
    - creating and using an iterator
    - iterate over the iterator
**/

//generator function
function* NameGenerator() {
  yield "emma";
  yield "rose";
  yield "celine";
  yield "yvaine";
}

// create an iterator object
const nameIterator = NameGenerator();

// get a new value from the generator with the 'next' method
//const name1 = nameIterator.next();

// output value from generator
//console.log("test next value = "+name1.value);

// iterate over iterator object
for(let iteratorItem of NameGenerator()) {
  if (iteratorItem !== null) {
    console.log("iterator item = "+iteratorItem);
  }
}
