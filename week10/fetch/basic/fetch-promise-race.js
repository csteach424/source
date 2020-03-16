/*
* fetch-promise-race.js
* basic example usage of Promise.race...using Fetch API
*/

Promise
  .race([
    fetch('./assets/items.json'),
    fetch('./assets/notes.json')
  ])
  .then(responses => {
    return responses.json()
  })
  .then(res => console.log(res));
