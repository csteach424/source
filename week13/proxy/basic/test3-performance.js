/*
*	proxy - basic - test3-performance.js
* - instantiate basic proxy object using built-in constructor
* - use to test & measure performance
*/

// FN: check prime number
function primeNum(num) {
  // initial check
  if (num < 2) {
    return false;
  }

  for(let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// add proxy as wrapper for primeNum() function
primeNum = new Proxy(primeNum, {
  apply: (target, thisArg, args) => {
    // start a time with name 'primeNumTimer'
    console.time('primeNumTimer');
    /* invokes target function - thisArg defines the `this` value
    * if no `thisArg`, undefined will be used instead...
    * thisArg = value to use as `this` when executing a callback
    */
    const result = target.apply(thisArg, args);
    console.timeEnd('primeNumTimer');
    return result;
  }
});

// quick check for prime
primeNum(13);

// second test for prime
primeNum(1299827);
