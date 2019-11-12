/*
* ./src/maths/circle.js
* - mathematics helper functions
* - circle
*/

// get PI from JS built-in Math
const { PI } = Math;

// area - Radius param
function circleArea(r) {
  const areaVal = (PI * r ** 2);
  return areaVal;
}

// circumference - Radius param
function circleCircumference(r) {
  const circumference = (2 * PI * r);
  return circumference;
}

module.exports = {
  circleArea,
  circleCircumference
}
