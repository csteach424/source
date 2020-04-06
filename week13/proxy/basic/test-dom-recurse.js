/*
* proxy - test - test-dom-recurse.js
* - instantiate proxy with get trap
* - recursively check for node
*/

// FN: recursive check for dir path and file...
function Dom() {
  return new Proxy({}, {
    get: (target, property) => {
      console.log(`reading property...${property}`);
      // check if property already exists
      if (!(property in target)) {
        // if not - simply add a new node to target
        target[property] = new Dom();
        console.log(`target...${target}`);
        //console.log(`<${property}>`);
      }
      // otherwise return property as is from target
      // - write method not implemented...
      //console.log(target);
      return target[property];
    }
  });
}

// create new Proxy for function
const rootDom = new Dom();

try {
  // check properties relative to root dom...
  rootDom.main.header.p;
  console.log('exception not raised...');
} catch (event) {
  // error handling for null exception should be OK due to custom proxy...
  console.log(`exception raised...${event}`);
}