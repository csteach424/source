/*
* maps.js - Google Maps API test
* - test query with basic map...
*/

/*
* BASIC MAP
*/
var lat = -34.397;
var long = 150.644;

function buildMap(lat, long) {
  //set combined position for user
  var latlong = new google.maps.LatLng(lat, long);
  //set required options
  var mapOptions = {
    center: latlong,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  //build map in map div...
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  //add initial location marker
  var marker = new google.maps.Marker({position: latlong,map: map});
}

buildMap(lat, long);
