/*
  mongoose-remove.js
  - test Mongoose queries with MongoDB
  - test delete route with params
*/

// get ObjectID property from MongoDB native driver
const {ObjectID} = require('mongodb');

// require mongoose config
const {mongoose} = require('./../server/dbms/mongoose-config.js');
// require models - todo
const {Todo} = require('./../server/models/todo-model.js');

// remove all docs from DB
Todo.remove({}).then((result) => { // empty object required to delete all docs
  console.log(result);
});

// find a single doc and remove from db - single doc removed will also be returned
Todo.findOneAndRemove({completed: true}).then((todo) => { // useful to find doc without ID - i.e. by text, author &c.
  console.log(todo);
});

// find a single doc by ID and remove...
Todo.findByIdAndRemove('597b92e6031086379d868696').then((todo) => {
  console.log(todo);
});
