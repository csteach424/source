/**
* test.js - objects access
    - getters and setters to guard private properties
**/

// constructor
function Archive() {
    // define private variable
    let accessLevel;

    // define getter method
    this.getAccess = () => accessLevel;

    // define setter method
    this.setAccess = value => {
        accessLevel = value;
    };
}

// instantiate archive object
const archive = new Archive();

// set archive access
archive.setAccess('magister');

// check access via getter
console.log(`archive access restricted to ${archive.getAccess()}`);

//check access without getter - should return undefined
console.log(`archive access = ${archive.accessLevel}`);
