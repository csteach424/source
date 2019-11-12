/* a simple Express server for Node.js
   comp 424 - appTest
*/

var express = require("express"),
    http = require("http"),
    jsonApp = express(),
    notes = {
      "travelNotes": [{
      "created": "2015-10-12T00:00:00Z",
      "note": "Curral das Freiras..."
      }]
    };

jsonApp.use(express.static(__dirname + "/app"));

http.createServer(jsonApp).listen(3030);

//json route
jsonApp.get("/notes.json", function(req, res) {
  res.json(notes);
});
