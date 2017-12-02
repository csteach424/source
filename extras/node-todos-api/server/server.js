/*
  Node.js, MongoDB, and Mongoose Todo app - v1.0.1
  - server.js
*/

// require config for env
require('./config/config');

/*
  require modules
*/
// npm - require installed modules
// lodash js library - utilities
const _ = require('lodash');
// express web framework
const express = require('express');
// body-parser module
const bodyParser = require('body-parser');
// ObjectID for validation
const {ObjectID} = require('mongodb');

// local - get mongoose property using ES6 destructuring - name of created local variable will match the property of the object
var {mongoose} = require('./dbms/mongoose-config'); // require custom mongoose config created for app
// Todo property for model
var {Todo} = require('./models/todo-model');
// User propertu for model
var {User} = require('./models/user-model.js');

// create express app
var app = express();

// environment port variable - set relative to environment variable
const port = process.env.PORT;

// configure middleware for body-parser
app.use(bodyParser.json());

/*
  API routes
  - GET
  - POST
  - DELETE
  - PATCH
*/
// POST route for todo items
app.post('/todos', (req, res) => { // route url for all todo items - use for post and get...
  // create todo item from model
  var todo = new Todo({
    text: req.body.text // specify text for each todo item
  });

  todo.save().then((doc) => {
    res.send(doc); // send back to the saved document details
  }, (error) => {
    // send back errors...
    res.status(400).send(error); // send back error and status code for request...
  });
});

// GET route for todo items
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => { // promised resolved with all of the todos from the db
    res.send({ //response - send data back from get route - all of the todos
      todos // add todos array to object - update and modify object as needed instead of just sending array response...
    });
  }, (error) => { // error callback if error with promise
    res.status(400).send(error); // send back error and status code for request...
  });
});

// GET route with parameter - then query DB for passed ID
app.get('/todos/:id', (req, res) => {
  // get params ID from req
  var params_id = req.params.id;
  console.log(params_id);

  // validate passed ID - check not valid
  if (!ObjectID.isValid(params_id)) {
    // return 404 status code for invalid ID
    return res.status(404).send();
  }

  // test find for GET route with params 0 e.g. ID
  Todo.findById(params_id).then((todo) => {
    // check if return data available
    if (!todo) {
      return res.status(404).send();
    }

    // otherwise return the data for the params ID
    res.send({todo}); // return todo in object - more flexible than default array return
  }).catch((error) => { // catch return errors for query
    res.status(400).send();
  });

});

// DELETE route for single doc with ID
app.delete('/todos/:id', (req, res) => {
  // get params ID from req
  var params_id = req.params.id;
  console.log(params_id);

  // validate passed ID - check not valid
  if (!ObjectID.isValid(params_id)) {
    // return 404 status code for invalid ID
    return res.status(404).send();
  }

  // find doc by ID and remove from DB
  Todo.findByIdAndRemove(params_id).then((todo) => {
    // check if return data available
    if (!todo) {
      return res.status(404).send();
    }
    // otherwise return the data for the deleted params ID
    res.send({todo});
  }).catch((error) => { // catch return errors for the query
    res.status(400).send();
  });
});

// PATCH route for single doc with ID
app.patch('/todos/:id', (req, res) => {
  // get params ID from req
  var params_id = req.params.id;
  console.log(params_id);
  // only pick the properties we need for an update - stops false, unnecessary &c. properties being sent by the user
  var body = _.pick(req.body, ['text', 'completed']); // pick method from lodash - gets only specified properties from return req

  // validate passed ID - check not valid
  if (!ObjectID.isValid(params_id)) {
    // return 404 status code for invalid ID
    return res.status(404).send();
  }

  // check boolean return for completed i.e. true - reflects simple toggle update from false to true...
  if (_.isBoolean(body.completed) && body.completed) {
    // app uses boolean = true as reason to set completedAt to current Unix timestamp - not set by user
    body.completedAt = new Date().getTime(); // returns no. of ms from midnight 1 jan 1970 to current date...
  } else {
    // keep doc completed as false
    body.completed = false;
    // keep completedAt as not set - null
    body.completedAt = null;
  }

  // update the requested doc in the db - using Mongoose method, findByIdAndUpdate()
  Todo.findByIdAndUpdate(params_id, {$set: body}, {new: true}).then((todo) => { // MongoDB update - set object to body, and return the new doc object - new: true (mongoose naming for returnOriginal)
    // check todo object exists - return 404 for not found
    if (!todo) {
      return res.status(404).send();
    }
    // if todo found - send todo object
    res.send({todo});
  }).catch((error) => { // catch error
    res.status(400).send(); // send back error status - bad request code
  });
});

// set port for server
app.listen(port, () => { // use dynamic port
  console.log(`server started on port ${port}`);
});

module.exports = {
  app // ES6 shortcut - app: app
};
