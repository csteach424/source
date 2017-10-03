/**
* test.js - objects access
    - private object property with getter and setter
**/

// define constructor
function Archive() {
    // private variable - accessible through function closures
    let _catalogue = 'glass bead';
    // define catalogue property access
    Object.defineProperty(this, 'catalogue', {
        get: () => {
            console.log(`catalogue requested...`);
            return _catalogue;
        },
        set: value => {
            console.log(`catalogue updated`);
            _catalogue = value;
        }
    });
}

// instantiate object from Archive constructor
const archiveCheck = new Archive();

// check access to constructor variable - returns 'undefined' without getter method
console.log(`direct access against private variable = ${archiveCheck._catalogue}`);
// check access using getter method - returns variable value
console.log(`getter access against private variable = ${archiveCheck.catalogue}`);

// update catalogue value - uses 'setter' method
archiveCheck.catalogue = 'history';

// check update catalogue variable
console.log(`updated catalogue = ${archiveCheck.catalogue}`);