/*
* proxy - get & set trap - proxy-get1.js
* - proxy wrapper for target object
*/

function proxyWrapper() {
    const target = {};
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

const proxiedObject = proxyWrapper();
// set prop & value on target using proxy set trap
proxiedObject.archive = 'waldzell';
// target accessible using proxy get trap
console.log(`\ntarget archive = ${proxiedObject.archive}\n`);
// target not directly accessible
console.log(`target = ${target}`);