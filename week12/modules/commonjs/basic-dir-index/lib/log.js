/*
* ./lib/log.js
* - log functions for simple output
*/

// basic logger
function log(value, ...values) {
  const logValue = console.log(value, ...values);

  return logValue;
}

function dir(value, ...values) {
  const dirValue = console.dir(value, ...values);

  return dirValue;
}

// exports
module.exports = {
  log,
  dir
};
