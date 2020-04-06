/*
* proxy - basic - test5-populate.js
* - instantiate basic proxy object using built-in constructor
* - use to autopopulate properties
*/

// FN: recursive check for dir path and file...
function Directory() {
  return new Proxy({}, {
    get: (target, property) => {
      console.log(`reading property...${property}`);
      // check if property already exists
      if (!(property in target)) {
        // if not - simply add a new directory to target
        target[property] = new Directory();
      }
      // otherwise return property as is from target
      // - write method not implemented for actual directory...
      return target[property];
    }
  });
}

// create new Proxy for function
const rootDir = new Directory();

try {
  // check properties relative to root dir...
  rootDir.testDir.test2Dir.testFile = "test.md";
  console.log('exception not raised...');
} catch (event) {
  // error handling for null exception should be OK due to custom proxy...
  console.log(`exception raised...${event}`);
}