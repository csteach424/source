/*
* basic-async1.js
* async called with sync-like try/catch block
* 'awaits' return from fetch to local JSON file
*/

// FN: 'fetch' from JSON
function getNotes() {
  return fetch('./assets/files/notes.json', {
    headers: new Headers({
      Accept: 'application/json'
    })
  })
  .then(res => res.json());
}

// FN: async/await
async function read() {
  try {
    const notes = await getNotes();
    console.log(`notes FETCH successful`);
  } catch (err) {
    console.log(err);
    //console.log(err.statusCode = 404);
  }
}

read();
