/**
* test.js - generators - basic loop
    - using basic generators to output data
    - creating and using an iterator
**/

//generator function
function* NameGenerator() {
  yield "emma";
  yield "daisy";
  yield "rosemary";
}

for (let name of NameGenerator()) {
  var n = document.createTextNode(name);
  document.getElementById("output").appendChild(n);
  console.log("name is "+name);
}
