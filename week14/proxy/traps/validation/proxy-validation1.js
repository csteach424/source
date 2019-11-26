/*
* proxy - validation - proxy-validation1.js
* - proxy object with reference to map
* - map stores rules for permitted properties
*/

// MAP - validation rules for properties
const validationMap = new Map();

// TRAPS - define traps for proxy
const validator = {
    // set trap
    set(target, key, value) {
        // check map for matching handler
        if (validationMap.has(key)) {
            // return handler function if available...pass value as parameter
            return validationMap.get(key)(value);
        }

        // else - default reflect set method for proxy
        return Reflect.set(target, key, value);
    }
};

// RULES - define executable rules for permitted object properties
// e.g. log, update state, get state, broadcast, subscribe...
// e.g. sample validation for text to log

function validateLog(text) {
    if (typeof text === 'string') {
        console.log(`logger = ${text}`);
    } else {
        throw new TypeError(`logger requires text input...`);
    }
}


// set key and handler function in map
validationMap.set('logger', validateLog);
// empty object to wrap with proxy
const process = {};
// instantiate proxy object
const proxyProcess = new Proxy(process, validator);

// string set using handler for logger
proxyProcess.logger = 'test string = hello proxy...';
// number will not be set - fails validation
proxyProcess.logger = 96;