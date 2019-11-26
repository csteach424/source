/*
* proxy - basic - test6-reflect.js
* - instantiate basic proxy object using built-in constructor
* - test Reflect API usage for basic proxy
* - restrict access for `_` property names 
*/

const handler = {
    get(target, key) {
        if (key.startsWith('_')) {
           throw new Error(`Property "${ key }" is inaccessible.`)
        }
        return Reflect.get(target, key)
    }
};

const library = {
    archive : 'waldzell',
    curator : 'knechts',
    _secret : true
};
const proxy = new Proxy(library, handler);
console.log(`secret = ${proxy._secret}`);
console.log(`archive = ${proxy.archive}`);
