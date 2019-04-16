/**
* test.js - object-oriented prototype
  - test property definition...
**/

// empty object
const archive = {};

// add properties to object
archive.name = "waldzell";
archive.type = "game";

// define property access, usage, &c.
Object.defineProperty(archive, "access", {
	configurable: false,
	enumerable: false,
	value: true,
	writable: true
});

// check access to new property
console.log(`${archive.access}, access property available on the object...`);

/*
* check we can't access new property in loop
* - for..in iterates over enumerable properties
*/
for (let property in archive) {
	// log enumerable 
	console.log(`key = ${property}, value = ${archive[property]}`);
}

/*
* plain object values not iterable...
* - returns expected TyoeError - archive is not iterable
*/
for (let value of archive) {
	// value not logged...
	console.log(value);
}