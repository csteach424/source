/* a simple Express server for Node.js
   comp 424 - appTest
*/

var express = require("express"),
    http = require("http"),
    bodyParser = require("body-parser"),
    jsonApp = express();

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

//json get route
jsonApp.get("/notes.json", function(req, res) {
  res.json(notes);
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
});
