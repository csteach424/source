### Readme - JS Plain - OO Prototypes - Basic Prototype Dynamic

A brief demo of the dynamic nature of prototypes.

  * FN: define constructor for object
    * set property `value` of instantiated object with default value
  * VARS:
    * create `const` variable with value set to instance of constructor
  * Use:
    * check output of value for `library` property from constructor
    * add method to prototype after object created
    * check prototype updated with new method
    * then overwrite prototype - constructor for existing object unaffected...i.e. prototype update does not retrospectively affect existing instantiated objects
    * create a new instance object of libraryRecord...with updated prototype
    * check output for second instance object
    * check if prototype updated for first instance object
      * check values & manual update with method on prototype
    * check prototype has been fully overwritten
      * e.g. `updateLibrary()` no longer available on prototype for new instance object