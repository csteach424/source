/*
* proxy - get & set trap - proxy-get2-existing.js
* - proxy wrapper for target object
* - pass existing object & wrap in proxy
* - check original for object - if not, return empty object...
*/

function proxyWrapper(original) {
	// check target for proxy wrapper - original must be object
	const target = checkTarget(original);
    const handler = {
        get(target, key) {
            if (key.startsWith('_')) {
               // return false to show prop doesn't exist...
               return false;
            }
            return Reflect.get(target, key)
        },
        set(target, key, value) {
            return Reflect.set(target, key, value);
        }
    };
    return new Proxy(target, handler);
}

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

const archive = {
	name: 'waldzell'
}

const proxiedArchive = proxyWrapper('archives');
// set prop & value on target using proxy set trap
proxiedArchive.admin = 'knechts';
// target accessible using proxy get trap
console.log(`\ntarget archive = ${proxiedArchive.name}\n`);
