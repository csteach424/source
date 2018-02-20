/**
* test.js - objects access
    - getters and setters to guard private properties with log for read and write access...
**/

// constructor
function Archive() {

    // access  logs
    this.logs = {
        get: 0,
        set: 0
    };

    // define private variable
    let accessLevel;

    // define getter method
    this.getAccess = () => {
        this.logs.get++;
        return accessLevel;
    };

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

console.log(`archive get log = ${archive.logs.get}`);

//check access without getter - should return undefined
console.log(`archive access = ${archive.accessLevel}`);
