/*
* Basic timestamps - test time and timestamps with JS
* index.js
*/

// define time container for output
var timeContainer = document.getElementById('time-output');
console.log(timeContainer);

// get current date
var currentDate = new Date();
// get current time
var currentTime = currentDate.getTime();
// get current month
var currentMonth = currentDate.getMonth();

// data render and output - element name
function domRender(elemName, elemID='default', elemClass='default', elemText='default') {
  // set element container
  var element = document.createElement(elemName);
  // check passed element ID
  if (elemID != 'default') {
    element.setAttribute('id', elemID);
  }
  // check passed element class
  if (elemClass != 'default') {
    element.setAttribute('class', elemClass);
  }
  // check passed text
  if (elemText != 'default') {
    // create text node
    var elemContent = document.createTextNode(elemText);
    // add text node to element
    element.appendChild(elemContent);
  }
  // return constructed element, attributes, & content...
  return element;
}

// format month number to concatenated month string
function monthFormatter(currentMonth) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Sep', 'Oct', 'Nov', 'Dec'];
  var month = months[currentMonth];
  return month;
}

/*
* create container for current time - argument for elemName, elemID, and elemClass
* TEST - pass undefined for ID to ensure default value is used & class now available
*/

// 1. output time in milliseconds - default rendering and output
var timeOutput = timeContainer.appendChild(domRender('li', undefined, 'current-time', currentTime));

// 2. output month - use month string from number
var monthOutput = timeContainer.appendChild(domRender('li', undefined, undefined, monthFormatter(currentMonth)));
