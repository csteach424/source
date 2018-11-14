/**
 * test.js - promises with custom getjson
 * 	- uses the built-in 'promise' constructor - an executor function
 * 		- accepts two parameters - resolve and reject
**/

function getJSON(url) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		//check browser support for CORS
		if (!('withCredentials' in xhr)) {
			alert('no CORS support');
			return;
		}

		xhr.open("GET", url);

		xhr.onload = function() {
			try {
				if (this.status === 200) {
					resolve(JSON.parse(this.response));
				} else {
					reject(this.status + " " + this.statusText);
				}
			} catch (e) {
				reject(e.message);
			}
		};

		xhr.onerror = function() {
			reject(this.status + " " + this.statusText);
		};

		xhr.send();
	});
}

//get public photos for NYPL on Flickr...
getJSON("...add_url_for_flickr_api...",
	).then(data => {
		console.log(data);
}).catch((err) => {
  // Handle any error that occurred in any of the previous promises in the chain.
	console.log('error found = ', err); // not much to show due to return of jsonp from flickr...
});
