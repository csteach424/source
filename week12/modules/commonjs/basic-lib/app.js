/*
* app.js - main file for testing Spire library...
*/

const spire = require('./lib/spire');

// test loggers
// basic log
const greeting = 'greetings from the planet Earth...';
spire.log(greeting);
// basic directory log
spire.dir({'name': 'test dir logger...'});

// test maths helper functions
// circle area - radius 10
const circleArea = spire.circleArea(5);
spire.log('circle area = ', circleArea);
// circle circumference = radius 5
const circleCircumference = spire.circleCircumference(5);
spire.log('circle circumference = ', circleCircumference);
// square area - width 10
const squareArea = spire.squareArea(10);
spire.log('square area = ', squareArea, 'for a width of 10');

// test loaders
// JSON loading - local file - return promise with JSON data
// URL - default is REMOTE (local set to false) - pass `local = true` to load local JSON...
const planets = spire.getJSON('./assets/json/planets.json', local = true);
// log return JSON...
planets.then( (res) => {
  spire.log(res);
});

// const remoteJSONTest = spire.getJSON('...');
// remoteJSONTest.then( (res) => {
//   spire.log(res);
// });
