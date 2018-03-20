/**
 * test.js - promise.all
 * 	- uses the built-in 'promise' constructor - an executor function
 * 	- wait for multiple promises - if one fails, all fails &c.
**/

// get JSON from local...
function getJSON(url) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

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

// wait for a number of promises - all
Promise.all([
// call getJSON with required URL, `then` method for resolve object, and `catch` for error
getJSON("notes.json"),
getJSON("metadata.json")]).then(response => {
  // check return value from promise...response[0] = notes.json, response[1] = metadata.json &c.
  if (response[0] !== null) {
		console.log("response obtained");
  	console.log("notes = ", JSON.stringify(response[0]));
  	console.log("metadata = ", JSON.stringify(response[1]));
	}
}).catch((err) => {
  // Handle any error that occurred in any of the previous promises in the chain.
	console.log('error found = ', err); // not much to show due to return of jsonp from flickr...
});
