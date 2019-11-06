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

// race an array of promises - e.g. getJSON calls...
Promise.race(
  [
  	// call getJSON with required URL, `then` method for resolve object, and `catch` for error
  	getJSON("notes.json"),
  	getJSON("metadata.json")
	]).then(response => {
    if (response !== null) {
  		console.log(`response obtained - ${JSON.stringify(response)} won...`);
    }
  }).catch((err) => {
    // Handle any error that occurred in any of the previous promises in the chain.
  	console.log('error found = ', err); // not much to show due to return of jsonp from flickr...
  });
