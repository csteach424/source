/**
* test.js - object-oriented prototypes
    - test basic prototpe inheritance...
**/

const object1 = { title: 'the glass bead game' };
const object2 = { author: 'herman hesse' };

console.log(object1.title);

Object.setPrototypeOf(object1, object2);

console.log(object1.author);