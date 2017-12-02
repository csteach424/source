/*
  mongoose-queries.js
  - test Mongoose queries with MongoDB
*/

// require mongoose config
const {mongoose} = require('./../server/dbms/mongoose-config.js');
// require models - todo
const {Todo} = require('./../server/models/todo-model.js');

// specify test doc ID
var docID = '5979f0f0f3a968291ae5bf63'; // ObjectID for doc from collection

/*
  Mongoose queries
*/
// find
Todo.find({
  _id: docID // mongoose will convert this string to an ObjectID
}).then((todos) => { // returns array of todo items
  console.log('all todo items - ', todos);
});

// find one - returns first match
Todo.findOne({
  completed: false
}).then((todo) => { // returns single item for first match
  console.log('single todo item - ', todo);
});

Todo.findById(docID).then((todo) => {
  console.log('single todo item by ID - ', todo);
});
