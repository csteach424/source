/*
*	proxy - basic - test2-logging.js
* - instantiate basic proxy object using built-in constructor
* - proxy used as a logger for code development and reuse...
*/

// test object
let planet = {
  name: 'mercury'
};

// logging with proxy - get and set traps defined
function logger(target) {
  return new Proxy(target, {
    get: (target, property) => {
      console.log(`property read - ${property}`);
      return target[property];
    },
    set: (target, property, value) => {
      console.log(`value '${value}' added to ${property}`);
      target[property] = value;
    }
  });
}

// new planet object with proxy
planetLog = logger(planet);

// test getting - value for property returned by getter in logger() method...
// logger() adds extra control & output...instead of direct property access
console.log('default get = ', planetLog.name);

// test setting - value for property set against object
planet.code = 'Me';