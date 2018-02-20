### Readme - JS Plain - Objects Access - Private Properties with Getters and Setters

A brief demo of getters and setters usage to guard private properties.

  * FN: constructor function
    * define private `let` variable
    * add *getter* and *setter* for access to private variable
  * VARS:
    * `const` variable for instantiated object `archive`
    * `let` private variable in constructor
  * Use:
    * instantiate object for `archive`
    * call *setter* method & add value to private variable
    * console log private variable value using *getter* method
    * test direct property access for private variable - should return `undefined`