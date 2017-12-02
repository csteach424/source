/*
  Node.js, MongoDB, and Mongoose Todo app - v1.0.1
  - todo-model.js
  - mongoose model for todo items
*/

// require mongoose module - not custom mongoose config file
var mongoose = require('mongoose');

// specify model for Todo item
var Todo = mongoose.model('Todo', {
  // specify requirements for a property of a todo item
  text: {
    type: String,
    required: true, // text property is required to create a new document
    minlength: 1, // todo item must have at least 1 character
    trim: true // removes leading and trailing spaces
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// module export
module.exports = {
  Todo // ES6 shortcut for Todo: Todo
};
