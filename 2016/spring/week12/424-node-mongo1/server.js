/* a simple Express server for Node.js
   comp 424 - appTest
*/

var express = require("express"),
    http = require("http"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    jsonApp = express(),
    notesTotal = {};

//set as static file server...
jsonApp.use(express.static(__dirname + "/app"));

//parse jQuery JSON to useful JS object
jsonApp.use(bodyParser.urlencoded({ extended: false }));

//connect to 424db1 DB in MongoDB
mongoose.connect('mongodb://localhost/424db1');

//define Mongoose schema for notes
var NoteSchema = mongoose.Schema({
  "created": Date,
  "note": String
});

//model note
var Note = mongoose.model("Note", NoteSchema);

//create http server
http.createServer(jsonApp).listen(3030);

//json get route - update for mongo
jsonApp.get("/notes.json", function(req, res) {
  Note.find({}, function (error, notes) {
   //add some error checking...
   res.json(notes);
  });
});

//json post route - update for mongo
jsonApp.post("/notes", function(req, res) {
  var newNote = new Note({
    "created":req.body.created,
    "note":req.body.note
  });
  newNote.save(function (error, result) {
    if (error !== null) {
      console.log(error);
      res.send("error reported");
    } else {
      Note.find({}, function (error, result) {
        res.json(result);
      })
    }
  });
});
