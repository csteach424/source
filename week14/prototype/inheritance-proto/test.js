/**
* test.js - object-oriented prototype
    - test basic prototpe inheritance...
**/

//constructor for object
function Library() {
	// instance properties
  this.type = 'library';
  this.location = 'waldzell';
}

// constructor for Archive object
function Archive(){
	// instance property
  this.domain = 'gaming';
}

// update prototype to parent Libary - instance relative to parent & child
Archive.prototype = new Library();

// instantiate new Archive object
const archiveRecord = new Archive();

// check instance object - against constructor
if (archiveRecord instanceof Archive) {
  console.log(`archive domain = ${archiveRecord.domain}`);
}

// check constructor used for archiveRecord object
if (archiveRecord.constructor === Archive) {
  console.log('constructor found on Archive...');
} else {
	// Library constructor output - due to prototype
  console.log(`archive constructor = ${archiveRecord.constructor}`);
}

// check instance of archiveRecord - instance of Library & Archive
if (archiveRecord instanceof Library) {
	// type property from Library
  console.log(`library type = ${archiveRecord.type}`);
	// domain property from Archive
	console.log(`archive domain = ${archiveRecord.domain}`);
}