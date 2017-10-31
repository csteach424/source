/**
  test.js - abstracted example - basic test generator
    - iterator object with generator
**/

function* testGenerator() {
  const a = yield "emma";
  const b = yield "yvaine";
  const c = yield "daisy";
  return "generator done...";
}

// create iterator for generator
const gen = testGenerator();
//output first value from generator using the iterator
console.log(gen.next());
// output second...
console.log(gen.next());
