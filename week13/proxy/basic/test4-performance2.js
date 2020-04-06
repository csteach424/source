/*
*	proxy - basic - test4-performance2.js
* - instantiate basic proxy object using built-in constructor
* - use to test & measure performance
*/

// FN: test loop to output to terminal
function loopOutput(counter, marker = '-') {
  if (!counter) {
    return false;
  }
  // loop through passed counter - check number for even...
  for (i = 0; i <= counter; i++) {
    // check for even counter value
    if (i % 2 === 0) {
      process.stdout.write('+');
    } else {
      // console.log(marker);
      process.stdout.write(marker);
    }
  }
  console.log('\n');
  return true;
}

// wrap function inside custom Proxy
loopTest = new Proxy(loopOutput, {
  // apply simple timer to loop function
  apply: (target, thisArg, args) => {
    console.time("loopTest");
   /* invokes target function - thisArg defines the `this` value
    * if no `thisArg`, undefined will be used instead...
    * thisArg = value to use as `this` when executing a callback
    */
    console.log(`thisArg = ${thisArg}`);
    const result = target.apply(thisArg, args);
    console.timeEnd("loopTest");
    return result;
  }
});

// call function with counter value and custom marker...
loopTest(75, '-');
