/*
* resize.js
* - test resize of elements
*/

// buttons
let hideBtn = document.getElementById('hide-menu');
// content areas
let content = document.getElementById('content');
let mapMenu = document.getElementById('map-menu');
let mapView = document.getElementById('map-view');
let mapContent = document.getElementById('map');

/*
* hide button
* - hide menu & expand map
* - use anonymous fn instead of arrow fn
* - bind `this` to click handler
*/
hideBtn.addEventListener('click', function() {
	console.log('this = ', this);
	// check if map menu is visible or not...
	if (mapMenu.style.display != 'none') {
		//console.log('hide menu...');
		content.style.gridTemplateAreas = '"map"';
		content.style.gridTemplateColumns = 'auto';
		mapMenu.style.display = 'none';
		this.textContent = 'Show Menu';
	} else {
		//console.log('show menu...');
   	content.style.gridTemplateAreas = '"menu map"';
   	content.style.gridTemplateColumns = '200px auto';
  	mapMenu.style.display = 'block';
		this.textContent = 'Hide Menu';
	}
});