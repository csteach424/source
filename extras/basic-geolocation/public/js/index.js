/*
* basic geolocation api test
* index.js - general app logic and code
*/

// button for location selector
var locButton = $('#check-location')
// output location coordinates
var locOutput = $('#location-output');

// event listener for geolocation button
locButton.on('click', () => {
  if (!navigator.geolocation) {
    return alert('geolocation not supported by your current web browser...');
  }
  locButton.attr('disabled', 'disabled').text('checking location...');
  // navigator object - getCurrentPosition accepts success and fail functions
  navigator.geolocation.getCurrentPosition( (position) => { //
    // remove disabled attribute
    locButton.removeAttr('disabled').text('check location');
    // li element for position output
    var li = $('<li>');
    // set text for coordinates
    li.text(`latitude = ${position.coords.latitude} & longitude = ${position.coords.longitude}`);
    // append new element to DOM placeholder
    locOutput.append(li);
  }, () => { // error
    // remove disabled attributed - show location button to allow user to try again &c.
    locButton.removeAttr('disabled').text('check location');
    alert('unable to get location...');
  });
});
