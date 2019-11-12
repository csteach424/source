/*
* app.js
* - commonjs tests
* - test basic directory structure
*/

// require directory for custom library - package.json checked for main file location...
const spire = require('./spire');

// call method from library - defined in module file & exported from index.js
spire.log('greetings from planet earth...');

spire.dir({'name': 'test'});
