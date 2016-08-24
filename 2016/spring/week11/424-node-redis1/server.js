/* a simple Express server for Node.js
   comp 424 - appTest
*/

var express = require("express"),
    http = require("http"),
    bodyParser = require("body-parser"),
    jsonApp = express(),
    redis = require("redis"),
    notesTotal = {};

//set default notes on server start
var notes = {
  "travelNotes": [{
  "created": "2015-10-12T00:00:00Z",
  "note": "Curral das Freiras..."
  }]
};

//set as static file server...
jsonApp.use(express.static(__dirname + "/app"));

//parse jQuery JSON to useful JS object
jsonApp.use(bodyParser.urlencoded({ extended: false }));

//create http server
http.createServer(jsonApp).listen(3030);

//create client to connect to Redis
redisConnect = redis.createClient();

//json get route
jsonApp.get("/notes.json", function(req, res) {
  res.json(notes);
});

//json get route
jsonApp.get("/notesTotal.json", function(req, res) {
  res.json(notesTotal);
});

jsonApp.post("/notes", function(req, res) {
  //store new object in req.body
  var newNote = req.body;
  //push new note to JSON
  notes["travelNotes"].push(newNote);
  //return simple JSON object
  res.json({
    "message": "post complete to server"
  });
  //increment notes counter in Redis
  redisConnect.incr("notes");
  //get Redis count total for each post instead of server start
  redisGet();
});

function redisGet() {
redisConnect.get("notes", function(error, notesCounter) {
  //set counter to int of value in Redis or start at 0
  notesTotal.notes = parseInt(notesCounter,10) || 0;
  console.log(notesTotal.notes);
});
}
