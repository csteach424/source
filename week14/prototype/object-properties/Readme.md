### Readme - JS Plain - OO Prototypes - Object Properties

A brief demo of configuring object properties.

  * VARS: 
		* variable with empty object for `archive`
		* add two initial properties and values on object
	* FN: call `defineProperty()` on global `Object`
		* add property settings for specified `archive` object
		* test by setting `enumerable` to false
			* won't show as part of loop
	* Use:
		* check new property is available on the object
		* add `for...in` loop and check access to new property
			* it should not show in property output for object