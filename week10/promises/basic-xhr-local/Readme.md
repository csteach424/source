
### Readme - JS Plain - Basic XHR

A brief demo of basic promise usage with getJSON XHR and local file.

*n.b.* demo requires a running server - e.g. Python's SimpleHTTPServer,

```bash
python -m SimpleHTTPServer
```

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
      * call `getJSON` - pass URL, e.g. local JSON file
      * chain `then()` to promise object - pass data return from promise
        * output data from promise, e.g. return objects
      * chain `catch()` method
        * catch any errors from within the promise chain...
        * saves adding separate error handling per level in the chain
