/*
* fetch-basic-error2.js
* basic example usage of Fetch API...error handling in `then`
*/

fetch('./assets/item.json')
  .then(
    res => {
      // reactions passed to `then` used to handle fulfillment of a promise
      console.log(res.json());
    },
    err => {
      // reactions may also handle errors specific to current promise error
      console.log(`error detected - ${err}`);
    }
  )
