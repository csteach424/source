/*
* toggle.js - basic test of node toggle in DOM
* - check node state
* - hide/show
*/

// toggle switch
let toggle = document.getElementById('toggle');

// get node in DOM
//let domNode = document.getElementById('planets');

toggle.addEventListener('click', () => {
  // get sibling element to toggle...
  let siblingNode = toggle.nextElementSibling;

  // check child node element visibiity
  if (siblingNode.getAttribute('data-visible') === 'true') {
    // update visibility
    siblingNode.setAttribute('data-visible', 'false');
    // hide sibling node
    siblingNode.style.display = 'none';
  } else {
    // update visibility
    siblingNode.setAttribute('data-visible', 'true');
    // show sibling node
    siblingNode.style.display = 'block';
  }

});
