/*
* fetch-basic1.js
* basic example usage of Fetch API...
*/

fetch('./assets/notes.json')
  .then(response => {
    return response.json();
  })
  .then(myJSON => {
    console.log(myJSON);
  });
