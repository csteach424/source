### Readme - JS Plain - OO Prototypes - Basic Prototype Instance & Properties

A brief demo of order of precedence for property search on an object's prototype.

  * FN: define constructor for object instantiation
    * set default value for instance object
    * set value on prototype for instance object
      * **n.b.** both properties intentionally use the same name...thereby testing order of precedence
  * VARS:
    * create `const` variable for instance object created with constructor
  * Use:
    * create new instance object and store in `const` variable
    * output value of instance object property - `library`
      * check order of precedence..
      * property on instance object will return the value - due to order of searching an object for properties

**n.b.** a property search will check the object itself first, then its prototype, and then any prototypes in the chain until there is no result found...this search is top down from the instance object