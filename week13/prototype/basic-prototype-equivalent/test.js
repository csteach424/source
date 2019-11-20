/**
* test.js - object-oriented classes
    - test prototype implementation for oo classes - basic
**/

// constructor function
function Archive(name, admin) {
  this.name = name;
	this.admin = admin;

	// instance method
	this.administrator = function () {
		return this.admin;
	}

	// add property to constructor
	Archive.access = function() {
  	return false;
	};
}

// instantiate object - pass arguments
const archive = new Archive('Waldzell', 'Knechts');

// check parameter usage with ternary conditional...
const nameCheck = archive.name === `Waldzell` ? archive.name : false;

// output name check...
console.log(`prototype archive name = ${nameCheck}`);
// call constructor only method
console.log(Archive.access());
// call instance method
console.log(`archive administrator = ${archive.administrator()}`);