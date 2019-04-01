/*
* distance.js - Google Maps API test
* - test query with Distance Matrix
*/

// var origin1 = new google.maps.LatLng(55.930385, -3.118425);
var origin2 = 'Greenwich, England';
// var destinationA = 'Stockholm, Sweden';
var destinationB = new google.maps.LatLng(50.087692, 14.421150);

var service = new google.maps.DistanceMatrixService();
service.getDistanceMatrix(
  {
    origins: [origin2],
    destinations: [destinationB],
    travelMode: 'DRIVING'
  }, callback);

function callback(response, status) {
  // define obj for response distance and duration values for first element...
  const distanceObj = response.rows[0]['elements'][0]['distance'];
  const durationObj = response.rows[0]['elements'][0]['duration']
  // log test objects to console
  console.log('reponse = ', response);
  console.log(distanceObj);
  console.log(durationObj);
  // create text nodes for output
  let distanceNode = document.createTextNode(`distance = ${distanceObj.text}`);
  let durationNode = document.createTextNode(` & duration = ${durationObj.text}`);
  // append nodes to DOM to test output...
  document.getElementById('output').appendChild(distanceNode);
  document.getElementById('output').appendChild(durationNode);
}
