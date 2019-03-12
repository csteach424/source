/*
* travel notes JS
* - plain JS example usage...
*/

function travelNotes() {
  "use strict";

  // get a reference to `.note_output` in the DOM
  let noteOutput = document.getElementById('note-output');
  // add note button
  let addNoteBtn = document.getElementById('add-note');
  // input field for add note
  let inputNote = document.getElementById('input-note');
  // delete all notes button
  let deleteAll = document.getElementById('notes-delete');


  // add event listener to add note button
  addNoteBtn.addEventListener('click', () => {
      createNote(inputNote, noteOutput);
  });

  // add event listener for keypress in note input field
  inputNote.addEventListener('keypress', (e) => {
    // check key pressed by code - 13 - return
    if (e.keyCode === 13) {
      createNote(inputNote, noteOutput);
    }
  });

  // add event listener for delete all notes...
	deleteAll.addEventListener('click', () => {
		// let notes = document.querySelector('p');
		// noteOutput.removeChild(notes);

		// get notes from DOM
		let notes = noteOutput.querySelectorAll('p');
		// check notes in DOM
		if (checkExist(notes) === true) {
			console.log('notes exist...');
			// hide parent controls node...
			deleteAll.parentNode.style.display = 'none';
			// loop through notes and remove a single note per iteration...
			for (let note of notes) {
				// remove single node
				note.remove();
			}
		}
	});

}

// create a note
// - input = value from input field
// - output = DOM node for output of new note
function createNote(input, output) {
  // get value from input field for note
	let inputVal = input.value;
	let controls = document.getElementById('app-controls');
	// check input value
	if (inputVal !== '') {
  	// create p node
  	let p = document.createElement('p');
		// click listener for note
		p.addEventListener('click', function() {
			console.log('note = ', this);
			// get notes delete buttons from DOM
			let delBtns = output.querySelectorAll('.note-delete');
			if (checkExist(delBtns) === true) {
				for (let btn of delBtns) {
					btn.style.display = 'none';
				}
			}
			this.querySelector('.note-delete').style.display = 'inline';
		});

		// create delete button for note
		let delButton = createButton('note-delete', 'delete');
		// add delete button for current note
		// use anonymous FN instead of arrow FN
		// this binds to clicked DOM node
		delButton.addEventListener('click', function () {
			console.log('note delete...', this.parentNode);
			this.parentNode.remove();
			// get notes from DOM
			let notes = output.querySelectorAll('p');
			if (checkExist(notes) === false) {
				controls.style.display = 'none';
			}
		});
		
		// prepend button to note
		p.prepend(delButton);
		// create text node
		let noteText = document.createTextNode(inputVal);
		// append text to paragraph
		p.appendChild(noteText);
		// append new paragraph and text to existing note output
		output.appendChild(p);
		// call custom animation for fade in...
		fadeIn(p);
		// clear input text field
		input.value = '';
	}
	checkVisible(controls);
}

// create button element - pass class and text
function createButton(btnClass, btnTxt) {
	// create button node
	let btnNode = document.createElement('button');
	// create button text node
	let btnTxtNode = document.createTextNode(btnTxt);
	// set attribute on button node
	btnNode.setAttribute('class', btnClass);
	// append text to button 
	btnNode.appendChild(btnTxtNode);
	// return new button node with text and attribute...
	return btnNode;
}

// check visibility of passed node
function checkVisible(node) {
	console.log(node);
	// check passed node's current visibility
	if (node.style.display != 'block') {
		// show in DOM to allow fadeIn...
		node.style.display = 'block';
		// call fadeIn for node in DOM
		fadeIn(node);
	}

	// variant with visibility property
	// if (node.style.display != 'block') {
	// 	// show in DOM to allow fadeIn...
	// 	node.style.display = 'block';
	// 	// call fadeIn for node in DOM
	// 	fadeIn(node);
	// }
}

function checkExist(node) {
	if (node.length) {
    return true;
  } else {
    return false;
  }
}

// custom fade-in animation...
function fadeIn(node) {
  node.style.opacity = 0;

  let last = +new Date();
  let tick = () => {
    node.style.opacity = +node.style.opacity + (new Date() - last) / 1500;
    last = +new Date();

    if (+node.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 10);
    }
  };

  tick();
}

// load app
travelNotes();
