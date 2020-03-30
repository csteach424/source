/*
* app.js
* - commonjs tests
* - test basic directory structure
*/

// require directory for custom library - Node.js checks index.js in ./lib
const lib = require('./lib');

// call method from library - defined in module file & exported from index.js
lib.log('greetings from planet earth...');

lib.dir({'name': 'test'});
