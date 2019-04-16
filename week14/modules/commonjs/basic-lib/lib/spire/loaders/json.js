/*
* ./src/loaders/json-local.js
*  - load data from local and remote sources
*  - suports various sources
*    - JSON
*/

// require default FS module
const fs = require('fs');

/*
* FN: JSON loader
*  - load JSON from passed URL
*  - URL supports local and remote...
*/
async function loadJSON(url, local) {
  if (local) {
    //const response = await fetch(url);
    console.log('get local JSON = ', local);
    // read local JSON...
    let localJSON = fs.readFileSync(url);
    // parse string to object to be used in app...
    let response = JSON.parse(localJSON);
    return response;
  } else {
    let response = 'remote URL passed...';
    return response;
  }
  //console.log('local json = ', response);

  // if (response.status === 200) {
  //   const loadData = await response.json();
  //   return loadData;
  // } else {
  //   throw new Error(`Unable to fetch JSON data...`);
  // }

}

/*
* FN: check response header for loadJSON
*/


/*
* FN: read a passed URL
*  - focus on loading data from URL
*  - return model data
*/
async function readJSON(url, local) {
  try {
    const readData = await loadJSON(url, local);
    return readData;
  } catch(err) {
    console.error(err);
  }
}

/*
* FN: write data for app usage
*  - return data without direct call to read or loadJSON...
*/
async function getJSON(url, local = false) {
  const writeData = await readJSON(url, local);
  return writeData;
}

module.exports = {
  getJSON
}
