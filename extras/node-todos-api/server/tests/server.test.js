/*
  TEST FILE
  - Node.js, MongoDB, and Mongoose Todo app - v1.0.1
  - server.test.js
*/

/*
  add required modules
  - npm modules
  - local files
*/

// npm modules
const expect = require('expect'); // test assertions
const request = require('supertest'); // test api routes
const {ObjectID} = require('mongodb'); // ObjectID property from MongoDB object

// local files
const {app} = require('./../server');
const {Todo} = require('./../models/todo-model');

// update dummy todo items with test ID name:value pair property
const todos = [
  {
    _id: new ObjectID(),
    text: 'a todo item...'
  },
  {
    _id: new ObjectID(),
    text: 'another todo doc item...',
    completed: true,
    completedAt: 230797
  }
];

// before a describe block is executed - wipe existing todo items stored in data store - add dummy data objects
beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

/*
  test routes
  - GET with PARAMS
  - DELETE with PARAMS
  - PATCH with params
*/

// describe for the POST API route
describe('POST /todos', () => {
  // add test cases for this route
  it('should create a new todo item', (done) => {
    var text = 'some text for a todo item...';

    // use Supertest to test POST - pass app object
    request(app)
      .post('/todos') // call post method from app object - i.e. call api route
      .send({
        text // ES6 shortcut for text: text
      })
      .expect(200) // assertion to test status code
      .expect((res) => { // create custom assertion to test response body text
        expect(res.body.text).toBe(text); // test that the response text matches the text specified above in var text
      })
      .end((error, res) => { // check todo item was saved to MongoDB
        if (error) {
          return done(error);
        }

        // find todo with specified var text
        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e)); // catch any errors in callback - then pass to done() to finish
      });
  });

  it('should not create a todo item with invalid data', (done) => {
    request(app)
      .post('/todos')
      .send({}) // send empty data to post route
      .expect(400) // expect status code 400
      .end((error, res) => {
        if (error) {
          return done(error); // finish test if error returned
        }

        // find and return all todos in the DB - DB wiperd beforeEach - should be 0 if no todo item created...
        Todo.find().then((todos) => {
          expect(todos.length).toBe(2); // checking for dummy data - 2 objects
          done();
        }).catch((e) => done(e));
      });
  });

});

// describe for the GET API route
describe('GET /todos', () => {
  it('should GET all todo items...dummy data found', (done) => {
    request(app)
      .get('/todos') // specify api url
      .expect(200) // check status code - 200 for OK
      .expect((res) => { // custom assertion
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });
});

// check GET route with params ID
describe('GET /todos/:id', () => {
  // test case - route with params - success return
  it('should return a doc for a todo item...', (done) => { // done required due to async test...
    request(app)
      // use first object.id from dummy todos array - convert ObjectID to string with toHexString() method
      .get(`/todos/${todos[1]._id.toHexString()}`)
      .expect(200) // assert - status code to match OK 200
      .expect((res) => { // assert that return body matches - e.g. text property matches return
        expect(res.body.todo.text).toBe(todos[1].text);
      })
      .end(done); // call end and pass done to finish test case
  });

  // test case - route with params - 404 status return for doc not found
  it('should return a 404 status code for doc not found...', (done) => {
    var hexId = new ObjectID().toHexString();

    request(app)
      .get(`/todos/${hexId}`) // GET route to test with param ID
      .expect(404) // assert - status code should be 404
      .end(done); // call end and pass done to finish test case
  });

  // test case - route with params - 404 for not valid ObjectIDs
  it('should return a 404 status code for non-valid &c. ObjectID', (done) => { // pass in a non-object ID for testing
    request(app)
      .get('/todos/abc123def') // pass in test invalid string - ObjectID has v. specific pattern
      .expect(404)
      .end(done);
  });
});

// check DELETE route with params ID
describe('DELETE /todos/:id', () => {
  // test case - check requested todo doc item has been removed
  it('should delete a doc for a todo item', (done) => {
    // specify test todo to delete
    var hexId = todos[1]._id.toHexString();

    request(app)
      .delete(`/todos/${hexId}`) // remove the specified doc by id
      .expect(200) // assert a 200 status code for the successful doc deletion
      .expect((res) => { // add custom assertion
        expect(res.body.todo._id).toBe(hexId); // assert that response body todo doc id matches the hexId
      })
      .end((error, res) => { // finish request
        if (error) { // handle error
          return done(error); // if error exists simply return the request as done...
        }

        // find doc id in db
        Todo.findById(hexId). then((todo) => {
          expect(todo).toNotExist(); // check that doc id does not exist in db
          done(); // call done and finish async all
        }).catch((error) => done(error)); // catch any error for async call - return done if error caught...
      });
  });

  // test case - check return status code for doc not found in DB
  it('should return a 404 status code for doc not found', (done) => {
    var hexID = new ObjectID().toHexString();

    request(app)
      .delete(`/todos/${hexID}`) // DELETE route to test with param ID
      .expect(404) // assert - status code should be 404
      .end(done); // call end and pass done to finish test case
  });

  // test case - check if doc object id is valid
  it('should return a 404 status code for invalid ObjectID...', (done) => {
    request(app)
      .delete('/todos/abc123def') // pass in test invalid string - ObjectID has v. specific pattern
      .expect(404)
      .end(done);
  });
});

// check PATCH route with params ID
describe('PATCH /todos/:id', () => {
  // test case - check update with params for doc id
  it('should patch and update the todo item', (done) => {
    // get ID from dummy todos object - first object
    var hexId = todos[0]._id.toHexString();
    // text for testing PATCH update
    var text = 'some test new text...';

    // setup test with assertions
    request(app)
      .patch(`/todos/${hexId}`)
      .send({
        completed: true,
        text // ES6 shortcute for name:value pair
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe(text);
        expect(res.body.todo.completed).toBe(true);
        expect(res.body.todo.completedAt).toBeA('number');
      })
      .end(done);
  });

  // test case - check completedAt relative to complete property
  it('should reset and clear completedAt property when todo item is not completed', (done) => {
    // get ID from dummy todos object - second object
    var hexId = todos[1]._id.toHexString();
    // text for testing PATCH update
    var text = 'some more test new text...';

    // setup test with assertions
    request(app)
      .patch(`/todos/${hexId}`)
      .send({
        completed: false, // todo item not completed
        text // ES6 shortcute for name:value pair
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe(text); // assert text matches dummy text
        expect(res.body.todo.completed).toBe(false); //assert completed property false - todo item not completed
        expect(res.body.todo.completedAt).toNotExist(); // assert completedAt does not exist - should be null...
      })
      .end(done);
  });
});
