/**
* test.js - object-oriented classes
    - test basic usage with ES6 classes.
**/

// class with constructor & methods
class Archive {
    constructor(name, admin) {
      this.name = name;
			this.admin = admin;
    }
		// class method
    static access() {
      return false;
    }
		// instance method
		administrator() {
			return this.admin;
		}
}

// instantiate archive object
const archive = new Archive('Waldzell', 'Knechts');

// check parameter usage with class
const nameCheck = archive.name === `Waldzell` ? archive.name : false;

// log archive name
console.log(`class archive name = ${nameCheck}`);
// call class method
console.log(Archive.access());
// call instance method
console.log(`archive administrator = ${archive.administrator()}`);