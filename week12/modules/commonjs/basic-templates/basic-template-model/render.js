/*
* render.js
* - abstracted, dynamic require loader for templates...
*/

function render(template, model) {
  return require(`./views/${ template }.js`)(model);
}

module.exports = render;
