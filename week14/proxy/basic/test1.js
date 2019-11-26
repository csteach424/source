/*
*	proxy - basic - test1.js
* - instantiate basic proxy object using built-in constructor
*/

// plain object
const planet = {
  name: ['mercury'],
  codes: {
    iau: 'Me',
    unicode: 'U+263F'
  }
};

// proxy for passed target object
const planetDetails = new Proxy(planet, {
  get: (target, key) => {
    return key in target ? target[key] :'planet does not exist...';
  },
  set: (target, key, value) => {
    key in target ? target[key].push(value) : 'key not found...';
  }
});

// check proxy access to target property
console.log(planetDetails.name);

// check proxy set against target property
planetDetails.name = 'earth';

console.log(planetDetails.name);