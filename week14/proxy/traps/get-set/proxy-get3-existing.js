/*
* proxy - get & set trap - proxy-get1.js
* - proxy wrapper for target object
* - pass existing object & wrap in proxy
* - check original for object - if not, return empty object...
* - abstract check in handler
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

const proxiedArchive = proxyWrapper('archives');
// set prop & value on target using proxy set trap
proxiedArchive.admin = 'knechts';
proxiedArchive._secret = '1235813';
// target accessible using proxy get trap
console.log(`\n target archive = ${proxiedArchive.admin}\n`);
console.log(`\n secret = ${proxiedArchive._secret}\n`);
