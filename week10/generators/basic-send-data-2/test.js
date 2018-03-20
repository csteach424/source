/**
  test.js - abstracted example - basic test generator with data
    - iterator object with generator
    - test data returned to generator
**/

function* testGenerator() {
  const a = yield "emma";
  const b = yield "yvaine";
  const c = yield "daisy";
  return "data total = "+(a + b + c);
}

// create iterator for generator
const gen = testGenerator();
//output first value from generator using the iterator
console.log(gen.next());
// output second...return value
console.log(gen.next(41));
// output second...return value
console.log(gen.next(129));
// output final return as generator returns DONE
console.log(gen.next(11));

/*
  - create iterator object from generator
  - use iterator to call the available data per `yield` in generator
  - call the next data return up to next `yield`
    - data is returned to last known variable before next value returned
  - after final yield
    - next output is returned and iterator object returned done set to TRUE
*/
