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

// extend prototype
Library.prototype.addArchive = function(archive) {
  console.log(`archive added to library - ${archive}`);
	// add archive property to instantiate object
	this.archive = archive;
	// add property to Library prototype
	Library.prototype.administrator = 'knechts';
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
// call addArchive on Library prototype
archiveRecord.addArchive('mariafels');

// check instance object - against constructor
if (archiveRecord instanceof Archive) {
  console.log(`archive domain = ${archiveRecord.domain}`);
}

// check constructor used for archiveRecord object
if (archiveRecord.constructor === Archive) {
  console.log('constructor found on Archive...');
} else {
  console.log(`archive constructor = ${archiveRecord.constructor}`);
	console.log(`archive domain = ${archiveRecord.domain}`);
	console.log(`archive = ${archiveRecord.archive}`);
	console.log(`archive admin = ${archiveRecord.administrator}`);
}

// check instance of archiveRecord - instance of Library & Archive
if (archiveRecord instanceof Library) {
	// type property from Library
  console.log(`library type = ${archiveRecord.type}`);
	// domain property from Archive
	console.log(`archive domain = ${archiveRecord.domain}`);
}

// instantiate another Archive object
const archiveRecord2 = new Archive();
// output instance object for second archive
console.log('archive2 object = ', archiveRecord2);
// check if archiveRecord2 object has access to updated archive property...NO
console.log(`archive2 = ${archiveRecord2.archive}`);
// check if archiveRecord2 object has access to updated adminstrator property...YES
console.log(`archive2 administrator = ${archiveRecord2.administrator}`);

