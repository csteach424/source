/**
* test.js - object-oriented prototypes - basic prototype instance & properties
    - test basic prototpe and instance properties
        * order of precedence for property search...
**/

//constructor for object
function LibraryRecord() {
    // set property on instance of object
    this.library = 'waldzell';

    //set default value on prototype
    LibraryRecord.prototype.library = 'castalia';
}

const bookRecord = new LibraryRecord();

console.log(bookRecord.library);