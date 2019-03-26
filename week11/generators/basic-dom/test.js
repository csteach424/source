/**
* test.js - generators - basic DOM traversal
    - using basic generators to output data
    - creating and using an iterator
    - iterate over the DOM's tree
**/

// generator function - traverse the DOM
function* DomTraverseGenerator(htmlElem) {
  yield htmlElem;
  htmlElem = htmlElem.firstElementChild;
  // transfer iteration control to another instance of the current generator - enables sub iteration...
  while (htmlElem) {
    yield* DomTraverseGenerator(htmlElem);
    htmlElem = htmlElem.nextElementSibling;
  }
}

// specify root of DOM for iterator...
const bodyTree = document.body;

// for-of loop over DOM and child nodes...
for (let htmlElem of DomTraverseGenerator(bodyTree)) {
  if (htmlElem !== null) {
    console.log(htmlElem.nodeName);
  }
}
