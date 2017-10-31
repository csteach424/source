### Readme - JS Plain - Generators - Basic DOM

A brief demo of basic generator usage - traverse the DOM

  * FN: define generator function to traverse DOM
    * parameter is start element for DOM traversal
    * create variable to hold first child element of the specified root element
    * add 'while' loop
      * 'yield' a new generator for each child element of the DOM
      * using a generator within a loop in a generator
      * return next sibling of the element in the traversal
  * Use:
    * create variable to specify start element for DOM, e.g. body
    * use 'for-of' loop to iterate over DOM and child nodes
      * return node name whilst html element is available
