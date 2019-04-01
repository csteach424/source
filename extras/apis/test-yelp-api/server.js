/* a simple Express server for Node.js
   comp 424 - yelp test
*/

var express = require("express"),
    http = require("http"),
    jsonApp = express();

const yelp = require('yelp-fusion');
// Place holder for Yelp Fusion's API Key
const apiKey = "YOUR_API_KEY";
const client = yelp.client(apiKey);

jsonApp.use(express.static(__dirname + "/app"));

http.createServer(jsonApp).listen(3030);

// Search for food
const searchRequest = {
  term:'restaurants',
  location: 'Rogers Park, Edgewater, Chicago, IL',
  price: '1'
};

// Search for bars
const searchRequest2 = {
  term: 'bars',
  location: 'Rogers Park, Edgewater, Chicago, IL',
  price: '1'
};

jsonApp.get("/food.json", function(req, res){
  client.search(searchRequest).then(response => {
    res.json(response.jsonBody);
    }).catch(e => {
      console.log(e);
    });
});

jsonApp.get("/bars.json", function(req, res){
  client.search(searchRequest2).then(response => {
    res.json(response.jsonBody);
    }).catch(e => {
      console.log(e);
    });
});
