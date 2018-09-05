/*
* toggle.js - basic test of node toggle in DOM
* - v0.1 - basic animation
* - check node state
* - hide/show
* - add animation for display
*/

// toggle switch
let toggle = document.getElementById('toggle');
// planets list
let planets = document.getElementById('planets');
let planetsHeight = planets.offsetHeight;

planets.style.overflow = 'hidden';
planets.style.border = '1px solid #000';

toggle.addEventListener('click', () => {
  console.log(planetsHeight);
  // get sibling element to toggle...
  let siblingNode = toggle.nextElementSibling;
  let slideHeight = siblingNode.offsetHeight;
  console.log('sibling offset height = ', slideHeight);

  // check child node element visibiity
  if (siblingNode.getAttribute('data-visible') === 'true') {
    // update visibility
    siblingNode.setAttribute('data-visible', 'false');

    function slideUp() {
      if (slideHeight < 1) {
        console.log('slide up - height less than 1...');
        return;
      }
      slideHeight -= 2;
      siblingNode.style.height =  slideHeight + 'px';
      requestAnimationFrame(slideUp);
    }
    requestAnimationFrame(slideUp);

  } else {
    // update visibility
    siblingNode.setAttribute('data-visible', 'true');
    console.log('sibling offset height = ', siblingNode.offsetHeight);

    function slideDown() {
      if (slideHeight >= planetsHeight) {
        console.log('slide down - height greater than list...');
        return;
      }
      slideHeight += 2;
      siblingNode.style.height = slideHeight + 'px';
      requestAnimationFrame(slideDown);
    }
    requestAnimationFrame(slideDown);

  }

});
