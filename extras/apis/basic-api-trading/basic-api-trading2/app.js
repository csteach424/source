/*
* app.js - v2
* async called with sync-like try/catch block
* 'awaits' return from fetch to local JSON file
*/

// FN: 'fetch' from JSON
function getStocks(stock) {
	const apiURL = 'https://api.iextrading.com/1.0/stock/';
	const params = '/batch?types=quote,news,chart&range=1m&last=1';
	const queryURL = apiURL + stock + params;
	// return API data...
  return fetch(queryURL, {
    headers: new Headers({
      Accept: 'application/json'
    })
  })
  .then(res => res.json());
}



// FN: async/await
async function read(stock) {
  try {
    const stocks = await getStocks(stock);
    console.log(`stocks FETCH successful`, stocks);
		return stocks;
  } catch (err) {
    console.log(err);
  }
}

document.querySelector('button[name="api_submit"]').addEventListener('click', () => {
	const stock = document.querySelector('input[name="api_stock"]').value;
	// query API...
	read(stock).then(
		// use return data from API query
		(val) => {
			// test stock data...
			const companyName = val.quote['companyName'];
			// output test stock name &c. - basic output to document... 
			const companyHeading = document.createElement('p');
			companyHeading.innerHTML = companyName;
			document.getElementById('stock').appendChild(companyHeading);
		}
	);
});