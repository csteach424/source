/*
* promisefromscratch-delay.js
* create a Promise object from scratch...use delay to check usage
* promise may only be called once per execution due to delay and timeout...
*/

// check promise usage relative to timer...either timeout will cause the Promise to call and end
function resolveWithDelay(delay) {
  return new Promise(function(resolve, reject) {
    // log Promise creation...
    console.log('promise created...waiting');
    setTimeout(function() {
      resolve(`promise resolved in ${delay} ms`);
    }, delay);
    setTimeout(function() {
      resolve(`promise resolved in 3000ms`);
    }, 3000);
  })
}

// fulfilled with delay of 2000 ms
resolveWithDelay(2000).then(function(value) {
  console.log(value);
});
// fulfilled with default timeout of 3000 ms
// resolveWithDelay(6000).then(function(value) {
//   console.log(value);
// });
