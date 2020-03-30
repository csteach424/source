/*
* Spire library - ES modules
* ./lib/spire/helpers/log.js
* - log functions for simple output
*/

// basic logger to console
function log(value, ...values) {
  const logValue = console.log(value, ...values);

  return logValue;
}

// directory logger to console
function dir(value, ...values) {
  const dirValue = console.dir(value, ...values);

  return dirValue;
}

export {
	log,
	dir
}