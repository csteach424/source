/*
* spire.js - default loader for Spire Library
*/

/*
* REQUIRE
*  - load files for library functionality
*    - helper functions
*    - loaders
*      - async JSON - local & remote
*    - maths
       - circle
*    - type sub-libraries
*      - object helpers
*/

/*
* HELPERS
*/
// log data
const { log, dir } = require('./helpers/log');

/*
* LOADERS
*/
// data loader - JSON - local & remote
const { getJSON } = require('./loaders/json');

/*
* MATHS
*/
// circle helper functions
const { circleArea, circleCircumference } = require('./maths/circle');
// square helper functions
const { squareArea } = require('./maths/square');

// library exports
module.exports = {
  circleArea,
  circleCircumference,
  squareArea,
  dir,
  log,
  getJSON
}