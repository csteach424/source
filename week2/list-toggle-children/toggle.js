/*
* toggle.js - basic test of node toggle in DOM
* - check node state
* - hide/show
*/

// toggle switch
let toggle = document.getElementById('toggle');

// get node in DOM
let domNode = document.getElementById('planets');

toggle.addEventListener('click', () => {
  // get child nodes
  let nodeChildren = domNode.children;
  console.log(nodeChildren);
  if (domNode.getAttribute('data-visible') === 'true') {
      domNode.setAttribute('data-visible', 'false');
      // modify display property for each child
      for (let child of nodeChildren) {
        child.style.color = '#779eab';
        child.style.display = 'none';
       }
    } else {
      domNode.setAttribute('data-visible', 'true');
      // modify display property for each child
      for (let child of nodeChildren) {
        child.style.color = '#000';
        child.style.display = 'list-item';
       }
    }
});
