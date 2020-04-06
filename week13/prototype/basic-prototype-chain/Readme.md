### Readme - JS Plain - OO Prototypes - Basic Prototype Chain

A brief demo of basic prototype chain usage.

  * VARS:
    * define three variables using the `const` keyword
      * values set to objects
      * test output of `object1` property `title`
  * FN: 
    * use method `setPrototypeOf()` on global Object
    * set prototype of `object1` to `object2`
    * set prototype of `object2` to `object3`
  * Use:
    * use defined objects to test explicit setting of prototype chain
    * test output of property values for `object1` directly inherited from `object2`
    * test output of property values for `object1` indirectly inherited from prototype chain
      * property value from `object3` available on `object1`
