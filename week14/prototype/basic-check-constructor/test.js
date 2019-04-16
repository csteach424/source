/**
* test.js - object-oriented prototypes
    - check function used as constructor for instance object
**/

//constructor for object
function LibraryRecord() {
    //set default value on prototype
    LibraryRecord.prototype.library = 'castalia';
}

// create instance object for libraryRecord
const bookRecord = new LibraryRecord();

// output constructor for instance object
console.log(`constructor = ${bookRecord.constructor}`);

// check if function was constructor (use ternary conditional)
var check = bookRecord.constructor === LibraryRecord ? true : false;
// output result of check
console.log(check);