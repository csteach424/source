/*
* views/list.js
* - require item module
* - map and join items...
*/

const itemRender = require('./item');

module.exports = model => `<ul>
  ${model.map(itemRender).join('\n')}
</ul>`;
