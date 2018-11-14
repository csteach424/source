### Readme - JS Plain - Basic Promise Race

A brief demo of basic `Promise.race` usage with getJSON and local files.

  * FN: `getJSON()` function
    * returns Promise object - callbacks for resolve and reject
    * create XHR object using constructor for XMLHTTPRequest
    * use the `open()` method on the XHR object
      * pass HTTP method, e.g. GET
      * pass URL for request
    * xhr - on successful connection `onload`
      * try - check return status = 200 for OK
      * parse JSON return
      * otherwise reject connection...
      * catch errors with request &c.
    * xhr - on error with connection
      * reject with status
  * Use:
    * call `race()` method on JS Promise object
      * pass array of promise objects - e.g. two calls to `getJSON()`
        * each call expects URL for file &c.
      * chain `then()` method to handle response
      * check response has actually been returned & not null
        * output to console to check who won the race...
      * chain `catch()` method
        * catch any errors from within the promise chain...
        * saves adding separate error handling per level in the chain
