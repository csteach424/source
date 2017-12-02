/*
  mongoose-queries.js
  - test Mongoose queries with MongoDB
  - test validation and errors
*/

// get ObjectID property from MongoDB native driver
const {ObjectID} = require('mongodb');

// require mongoose config
const {mongoose} = require('./../server/dbms/mongoose-config.js');
// require models - todo
const {Todo} = require('./../server/models/todo-model.js');

// specify test doc ID
var docID = '5979f0f0f3a968291ae7Gf63888'; // ObjectID for doc from collection - FALSE for testing validation

if (!ObjectID.isValid(docID)) {
  // execute if ID not valid
  console.log('ID not valid...');
}

/*
  Mongoose queries
*/
// find all
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
  if (!todo) { // check for null return for query...
    return console.log("specified ID has not been found...");
  }
  console.log('single todo item by ID - ', todo);
}).catch((error) => console.log(error, 'Specified ID is not valid - try another one...')); // catch validation error with ID error &c. i.e. ID is invalid - perhaps too long...
