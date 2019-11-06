### Readme - JS Plain - Generators - Basic Generator with Data

A brief demo of basic generator usage - exchanging data with a generator - 2nd example

  * FN: generator function - expects parameter for data return
    * VARS: 3 variables - each will yield value for iterator `next()`
    * function returns total for passed data per `next()`
  * Use:
    * create iterator object from generator
    * use iterator to call the available data per `yield` in generator
    * call the next data return up to next `yield`
      * data is returned to last known variable before next value returned
    * after final yield
      * next output is returned and iterator object returned - done set to TRUE
