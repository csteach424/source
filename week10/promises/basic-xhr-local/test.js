/**
 * test.js - promises with custom getjson
 * 	- uses the built-in 'promise' constructor - an executor function
 * 		- accepts two parameters - resolve and reject
 *    - requires running server due to XSS on local machine
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

/*getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
          { tags: "cannes,france,boules",
            tagmode: "all",
            format: "jsonp"
          }).then(data => {
						console.log(data);
}).catch(e => fail("error returned = "+e));*/


getJSON("./notes.json").then(data => {
	console.log(data);
}).catch((err) => {
  // Handle any error that occurred in any of the previous promises in the chain.
	console.log('error found = ', err); // not much to show due to return of jsonp from flickr...
});
