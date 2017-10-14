/**
* test.js
* - add event listener for input and button
* - add IIFE function pattern to load initial symbol
* - add functions for loading a symbol and updating the value of a symbol
* - **n.b.** no error handling, validation, &c. - abstraction updates required as well, keyboard listener...
**/

var sampleTrading = {
  'symbol': 'AAPL'
}

// get output DOM element
const symbolOutput = document.getElementById('symbol_output');
// get input field for symbol
const symbolInput = document.getElementById('symbol_input');
// get update button
const symbolUpdate = document.getElementById('symbol_update');

// add event listener for button click
symbolUpdate.addEventListener('click', updateSymbol);

// load symbol value from sampleTrading object
function symbolLoader() {
  // get property value from object
  let symbol = sampleTrading.symbol;
  // update DOM - add symbol value...
  symbolOutput.innerHTML = `Latest Symbol = ${symbol}`;
}

// update symbol value in sampleTrading object - use input value
function updateSymbol() {
  // get value from input field
  let symbolValue = symbolInput.value;
  // test input value - log to console
  console.log(`input field = ${symbolValue}`);
  // update symbol value in sampleTrading object
  sampleTrading.symbol = symbolValue;
  // call symbolLoader for updated symbol property value from sampleTrading object
  symbolLoader();
}

// iife function pattern - outputs initial symbol as page loads...
(function() {
  let defaultSymbol = sampleTrading.symbol;
  symbolLoader();
})();
