/*
* app.js
* async called with sync-like try/catch block
* 'awaits' return from fetch to local JSON file
*/

// FN: 'fetch' from JSON
function getStocks() {
  return fetch('https://api.iextrading.com/1.0/stock/aapl/batch?types=quote,news,chart&range=1m&last=1', {
    headers: new Headers({
      Accept: 'application/json'
    })
  })
  .then(res => res.json());
}



// FN: async/await
async function read() {
  try {
    const stocks = await getStocks();
    console.log(`stocks FETCH successful`);
		return stocks;
  } catch (err) {
    console.log(err);
  }
}

read().then(
	// use return data from API query
	(val) => {
		// test stock data...
		const companyName = val.quote['companyName'];
		// output test stock name &c. - basic output to document... 
		const heading = document.createElement('h4')
		const companyHeading = heading.appendChild(document.createTextNode(companyName));
		document.getElementById('stocks').appendChild(companyHeading);
	}
);
