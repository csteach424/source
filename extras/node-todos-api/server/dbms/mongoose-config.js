/*
  Node.js, MongoDB, and Mongoose Todo app - v1.0.1
  - mongoose-config.js
  - config and connect
*/

// require Mongoose
var mongoose = require('mongoose');

// specify preferred Promise library
mongoose.Promise = global.Promise;
//connect to MongoDB using Mongoose - use mLab or local uri
mongoose.connect(process.env.MONGODB_URI); // process environment returns mLab uri - url set by process.env in server.js


// module exports
module.exports = {
  mongoose // ES6 shortcut for mongoose: mongoose
};
