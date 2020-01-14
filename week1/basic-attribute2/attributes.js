/*
* attributes.js
* - basic access for custom attributes
* - add event listener for mouse click
*/

// get example blockquote nodes
let quote = document.getElementById('berryhead');

// add event listener to quotes object
quote.addEventListener('click', () => {
  if (quote.getAttribute('data-visible') === 'true') {
      quote.setAttribute('data-visible', 'false');
      quote.style.color = '#779eab';
    } else {
      quote.setAttribute('data-visible', 'true');
      quote.style.color = '#000';
    }
});
