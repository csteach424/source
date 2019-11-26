/*
* proxy - basic - test8-reflect-set.js
* - instantiate basic proxy object using built-in constructor
* - test Reflect API usage for basic proxy
*/

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

const library = {};
const proxy = new Proxy(library, handler);
proxy.archive = 'mariafels';
proxy._secret = true;
console.log(`secret = ${proxy._secret}`);
console.log(`archive = ${proxy.archive}`);
// _secret is not a private property in object - 
console.log(proxy.hasOwnProperty('_secret'))