/**
* test.js - object access
    - basic test of access to an object's properties...
**/

// create object
var object = {
  archive: 'waldzell',
  access: 'castalia',
  purpose: 'gaming'
};

// log output with dot notation
console.log(`archive is ${object.archive}`);

// log output with bracket notation - returns undefined
console.log(`access is restricted to ${object[1]}`);

//log out with bracket notation
console.log(`purpose is ${object['purpose']}`);
