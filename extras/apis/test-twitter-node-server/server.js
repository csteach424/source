/**
* server.js - Express config and setup
* support for Twitter API
**/

// environment
const appEnv = require('dotenv');
// load environment variables
appEnv.config();

/* 
* define required modules
*/
const express = require('express'),
      http = require('http'),
		  Twitter = require('twitter'),
      jsonApp = express();

// define server port - default to 3030 if NO env variable...
const port = process.env.PORT || 3030;

/*
* Twitter client module
* - instantiate object with developer settings...
* - credentials from environment variables
*/
const twitterClient = new Twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

// define default static route for server - e.g. loads /app/index.html if available
jsonApp.use(express.static(__dirname + '/app'));

// create HTTP server - provision on specified port, e.g. 3030
http.createServer(jsonApp).listen(port, () => {
	// log server start and current port to console
	console.log(`node server now running on port ${port}...`);	
});


/*
* GET routes
* - user timeline
*/

// timeline of user tweets
jsonApp.get('/timeline.json', (req, res) => {
	// example params - e.g. screen_name of user...
	const params = {screen_name: 'BBCNews'};
	// get user timeline
	twitterClient.get('statuses/user_timeline', params, function(error, tweets, response) {
		// if no error - use tweets or response...
  	if (!error) {
			// log tweets as test...
    	console.log(tweets);
			/* 
			* output res as JSON for this GET route...
			*/
			// outputs first tweet
			res.json(tweets[0]);
			// outputs all tweets
			// res.json(tweets);
  	} else {
			// log error to console
			console.log(error);
			// output error as JSON for this GET route...
			res.json(error);
		}
	});
});