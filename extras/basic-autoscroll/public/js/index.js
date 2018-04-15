/*
* Basic autoscroll - test autoscroll for vertical HTML rendering
* index.js
*/

// define time container for output
var timeContainer = document.getElementById('time-output');
console.log(timeContainer);

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

// create timer output
function timer() {
    // get current date
    var currentDate = new Date();
    // get current time
    var currentTime = currentDate.getTime();
    // get current month
    var currentMonth = currentDate.getMonth();
    //document.getElementById("time-output").innerHTML = d.toLocaleTimeString();
    timeContainer.appendChild(domRender('li', undefined, 'current-time', currentTime));
}

var runTimer = setInterval(timer, 1000);
