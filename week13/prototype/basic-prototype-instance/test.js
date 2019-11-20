/**
* test.js - object-oriented prototypes
    - test basic prototpe instance...
**/

//constructor for object
function LibraryRecord() {
    //set default value on prototype
    LibraryRecord.prototype.library = 'castalia';
}

const bookRecord = new LibraryRecord();

console.log(bookRecord.library);