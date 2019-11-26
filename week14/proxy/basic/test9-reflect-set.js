/*
* proxy - basic - test9-reflect-set.js
* - instantiate basic proxy object using built-in constructor
* - test Reflect API usage for basic proxy
* - add conditional check to Proxy before continuing to Reflect
*/

const handler = {
    get(target, key) {
        keyCheck(key, 'get');
        return Reflect.get(target, key);
    },
    set(target, key, value) {
        keyCheck(key, 'set');
        return Reflect.set(target, key, value);
    }
};

function keyCheck(key, action) {
    if (key.startsWith('_')) {
        throw new Error(`${action} action is not permitted on '${ key }'`)
     }
}

const library = {};
const proxy = new Proxy(library, handler);
proxy.archive = 'mariafels';
//proxy._secret = true;
console.log(`secret = ${proxy._secret}`);
console.log(`archive = ${proxy.archive}`);
// _secret is not a private property in object - 
console.log(proxy.hasOwnProperty('_secret'))