/*
* travel notes JS
* - plain JS example usage...
*/

function travelNotes() {
  "use strict";

  // get a reference to `.note_output` in the DOM
  let noteOutput = document.querySelector('.note-output');
  noteOutput.innerHTML = '<p>first travel note for Marseille...</p>';

  let addNoteBtn = document.getElementById('add-note');
  addNoteBtn.addEventListener('click', () => {
    console.log('add button clicked...');
  });

}

// load app
travelNotes();
