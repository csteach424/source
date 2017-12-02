/*
  Node.js, MongoDB, and Mongoose Todo app - v1.0.1
  - config.js
  - general config, incl. env variables...
*/

/*
  set required environment variables
*/
// set some environment variables
var env = process.env.NODE_ENV || 'development';
// log current environment
console.log('current env =', env);

// check current environment
if (env === 'development') {
  process.env.PORT = 3030;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/NodeTodoApp';
} else if (env === 'test') {
  process.env.PORT = 3030;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/NodeTodoAppTester';
}
