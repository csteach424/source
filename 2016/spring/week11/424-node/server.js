/* a simple Express server for Node.js
   comp 424 - appTest
*/

var express = require("express"),
    http = require("http"),
    appTest;

// create our server - listen on port 3030
appTest = express();
http.createServer(appTest).listen(3030);

//set up static file directory - acts as default routing for server
appTest.use(express.static(__dirname + "/app"));

// set up routes
// root route
appTest.get("/", function(req, res) {
  res.send("welcome to the 424 server.");
});
//test app route
appTest.get("/test", function(req, res) {
  res.send("welcome to the 424 test app.");
});
