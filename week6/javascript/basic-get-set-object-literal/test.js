/**
* test.js - objects access
    - getters and setters in object literals to guard private properties
**/

// object with properties and getter method
const archivalCatalogue = {
    name: ['waldzell', 'mariafels'],
    order: ['castalia', 'benedictine'],
	get archive() {
        // map name and order to create objects for archive details, e.g. waldzell & castalia
        let archiveMap = this.name.map((value, i) => ({ name: value, order: this.order[i] }));
        return archiveMap;
	}
}

// check access to properties and values...name array
for (let name of archivalCatalogue.name) {
    console.log(`name = ${name}`);
}

// loop over archive object - output archive name and associated archive order
for (let archive of archivalCatalogue.archive) {
    console.log(`name = ${archive.name} and order = ${archive.order}`);
}
