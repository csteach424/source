/*
* Basic timestamps - test time and timestamps with Moment.js
* index.js
*/

// require moment.js library
var moment = require('moment');

// get current date
var date = moment();

// check default date format
console.log(date.format());

// format date - month shorthand version - e.g. Jan
console.log(date.format('MMM'));

// format date - month & year shorthand version - e.g. Jan 2018
console.log(date.format('MMM Y'));

// format date - month & year shorthand version - e.g. Jan 18
console.log(date.format('MMM YY'));

// output example verbose rendering - Jan 10th 2018
console.log(date.format('MMM Do YYYY'));

// use add() method - add 10 years
date.add(10, 'year');
console.log(date.format('MMM Do, Y')); // e.g. Jan 10th, 2028

// use subtract() method = subtract 10 months
date.subtract(10, 'months');
console.log(date.format('MMM Do Y')); // e.g. Mar 10th 2027

// output formatted time - e.g, 9:40 pm
console.log(date.format('h:mm a'));

// output formatted time - e.g 21:40
console.log(date.format('H:mm'));
