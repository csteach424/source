 //set title
d3.select('#test-container').append('h5').text('Basic - add text');
//page elements - add a 'p' element and text
d3.select('#test-container').append('p').text('some sample text...');
	
//sample D3 array
var data = [0, 1, 2, 3, 4, 5];
	
 //set title
d3.select('#test-container2').append('h5').text('Basic - add element');	
//create a 'p' element for each value in the array
d3.select('#test-container2').selectAll('p').data(data).enter().append('p').text('p element...');

 //set title
d3.select('#test-container3').append('h5').text('Basic - add array value to element (with colour)');	
//output array value instead of dummy text
d3.select('#test-container3').selectAll('p').data(data).enter().append('p').text(function(d) { return d; });

 //set title
d3.select('#test-container4').append('h5').text('Basic - add key & value to element');	
//output array value instead of dummy text
d3.select('#test-container4').selectAll('p').data(data).enter().append('p').text(function(d, i) { return 'key = '+ i + ', value = ' + d; });
	
//bind css style to elements
d3.select('#test-container3').selectAll('p').style('color', 'blue');
	
//bind css style to even or numbers from array
d3.select('#test-container3').selectAll('p')
	.data(data)
	.style('color', function(d) {
		if (d % 2 == 0) {
			return 'green';
		} else {
			return 'blue';
		}
	});