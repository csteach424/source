/*
* main.js - basic test of search queries for YouTube API
*
*/

// load client for applicable API
function loadClient() {
	gapi.client.setApiKey('YOUR_API_KEY');
	return gapi.client.load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest')
		.then(function () { console.log('GAPI client loaded for API'); },
			function (err) { console.error('Error loading GAPI client for API',err); }
		);
}

// available after client loaded...
function executeSearch() {
	// return promise for youtube api query
	return gapi.client.youtube.search.list({
		"part": "snippet",
		"order": "viewCount",
		"q": "janine+jansen+bruch",
		"type": "video",
		"videoDefinition": "high"
	})
		.then(function (response) {
				// handle results - data in response object...
				console.log('Initial Search Response = ', response);
				structuredOutput(response.result);
			},
			function (err) { console.error('Execute error', err); }
		);
}

// load Google API client library - use with specific API calls, e.g. YouTube in loadClient()...
function loadGAPI() {
	// load library and execute local client for api...
	gapi.load('client', initClient);
}

// load and start API client
function initClient() {
	console.log('client API library has loaded...');
	loadClient();
	// add event listener for search query - callback executes search to API
	document.getElementById('searchSubmit').addEventListener('click', () => {
		console.log('search submitted...');
		executeSearch();
	});
}

// structure response from YouTube API
function structuredOutput(data) {
	// check passed data from api query...
	console.log('Initial Structured Output = ', data);
	// check items from search
	console.log('search items = ', data.items);
	// iterate through search items
	for (const item of data.items) {
		// check video id
		console.log(item.id['videoId']);
		document.getElementById('video-player').append(embedVideo(item.id['videoId']));
	}
}

function embedVideo(videoID) {
	const videoFrame = document.createElement('iframe'); 
	const videoSrc = document.createAttribute('src');
	videoSrc.value = `https://www.youtube.com/embed/${videoID}`;
	videoFrame.setAttributeNode(videoSrc);
	console.log(videoFrame);
	return videoFrame;
}

// define app options and initialisation
function main () {
	// load api library...
	loadGAPI();
}

// load app...
main();