### Readme - JS Plain - Basic CORS Flickr

A brief demo of basic promise usage with getJSON CORS and Flickr API.

  * FN: getJSON - expects a single parameter for the URL of the source
    * create XHR object using constructor for XMLHTTPRequest
    * check browser supper for CORS
    * use the `open()` method on the XHR object
      * pass HTTP method, e.g. GET
      * pass URL for request
    * xhr - on successful connection `onload`
      * try - check return status = 200 for OK
      * otherwise reject connection...
      * catch errors with request &c.
    * xhr - on error with connection
      * reject with status
  * Use:
    * call `getJSON` - pass URL, e.g. Flickr API
    * chain `then()` to promise object - pass data return from promise
      * output data from promise, e.g. return objects
    * chain `catch()` method
      * catch any errors from within the promise chain...
      * saves adding separate error handling per level in the chain
