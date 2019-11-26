/*
* proxy - has trap - proxy-has1.js
* - `has` trap for checking property access
*/

// check and wrap object with proxy
function proxyWrapper(original) {
	// check target for proxy wrapper - original must be object
	const target = checkTarget(original);
    const handler = {
        get(target, key) {
            if (checkDelimiter(key, '_')){
                return false;
            }
            return Reflect.get(target, key)
        },
        set(target, key, value) {
            return Reflect.set(target, key, value);
        },
        has(target, key) {
            if (checkDelimiter(key, '_')){
                return false;
            }
            return Reflect.has(target, key)
        }
    };
    // return target with proxy wrapper and handler for traps...
    return new Proxy(target, handler);
}

// check object & return empty object if necessary...
function checkTarget(original) {
    // check for existing target object
	if (original.typeof !== 'object' || original === undefined) {
		console.log('not object...');
        const target = {};
        return target;
	} else {
        const target = original;
        return target;
    }
}

// check property access using defined char delimiter
function checkDelimiter(key, char) {
    // check key relative to specified char delimiter
    if (key.startsWith(char)) {
        // return false to show prop not available 
        return true;
     }
}

const archive = {
	name: 'waldzell'
}

// check type of parameter object
const proxiedArchive = proxyWrapper('archives');
// set prop & value on target using proxy set trap
proxiedArchive.admin = 'knechts';
proxiedArchive._secret = '1235813';
// target accessible using proxy get trap
console.log(`target archive = ${proxiedArchive.admin}\n`);
// check get trap with _ property names
console.log(`secret = ${proxiedArchive._secret}\n`);
// check has trap with standard property name - returns true for proxiedArchive
console.log('admin' in proxiedArchive);
// check has trap with _ property name - returns false for any _ property...
console.log('_secret' in proxiedArchive);