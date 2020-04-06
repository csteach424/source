### Observer Pattern - Basic Test

General outline of observer pattern relative to button clicks.

#### pattern structure

* `Subject` constructor
  * instantiate object to keep track of observers

Then,

* extend `Subject` object prototype
  * `subscribe`
  * `unsubscribe`
  * `broadcast`

#### usage - dom

* new `Subject` object instantiated - `domSubject`
* define subscribe method and param for DOM load event
  * check passed status from broadcasting event

#### usage - buttons

* new `Subject` object instantiated - `btnSubject`
* define subscribe method and param for button event
  * `status` passed for each button click
  * boolean value relative to each click
    * conditional check for passed status
