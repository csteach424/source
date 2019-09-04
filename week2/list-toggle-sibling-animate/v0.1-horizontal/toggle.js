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

planets.style.overflow = 'hidden';
planets.style.border = '1px solid #000';
planets.style.width = '250px';
planets.style.listStyle = 'none';
// define padding - set right padding to 0 to avoid jumping &c. in animation
planets.style.padding = '10px 0 10px 10px';
planets.style.marginLeft = '10px';

let planetsWidth = planets.offsetWidth;

toggle.addEventListener('click', () => {
  // get sibling element to toggle...
  let siblingNode = toggle.nextElementSibling;
  let slideWidth = siblingNode.clientWidth - 10;
  console.log('sibling offset width = ', slideWidth);

  // check child node element visibiity
  if (siblingNode.getAttribute('data-visible') === 'true') {
    // update visibility
    siblingNode.setAttribute('data-visible', 'false');

    function slideLeft() {
      if (slideWidth < 1) {
        console.log('slide left - width less than 1...');
        return;
      }
      slideWidth -= 2;
      siblingNode.style.width =  slideWidth + 'px';
      requestAnimationFrame(slideLeft);
    }
    requestAnimationFrame(slideLeft);

  } else {
    // update visibility
    siblingNode.setAttribute('data-visible', 'true');
    console.log('sibling offset height = ', siblingNode.offsetHeight);

    function slideRight() {
      if (slideWidth >= planetsWidth) {
        console.log('slide right - width greater than list...');
        return;
      }
      slideWidth += 2;
      siblingNode.style.width = slideWidth + 'px';
      requestAnimationFrame(slideRight);
    }
    requestAnimationFrame(slideRight);

  }

});
