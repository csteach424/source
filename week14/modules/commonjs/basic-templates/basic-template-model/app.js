/*
* app.js - v0.3
* - basic test of model to view for templating
* - requires module for rendering view...
* - dynamic abstraction of view template, e.g. list view for the passed model data
*/

const listRender = require('./views/list');
const genericRender = require('./render');

const html = genericRender('item', {
  title: 'Perfume from Provence',
  author: 'Lady Winifred Fortescue',
  year: 1935,
})

console.log(html);
