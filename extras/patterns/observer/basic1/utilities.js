/*
* utilities.js
* - useful functions &c.
*/

/*
* Node builders
*/
// generic element builder
function elemBuilder(type, props, ...children) {
  let dom = document.createElement(type);
  if (props) Object.assign(dom, props);
  for (let child of children) {
    if (typeof child != "string") dom.appendChild(child);
    else dom.appendChild(document.createTextNode(child));
    console.log('elem build...');
  }
  return dom;
}
