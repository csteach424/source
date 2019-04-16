/*
* views/item.js - v0.3
* - template loads attributes from a `model` object
* - returns a view for rendering
*/
module.exports = model => `
<ul>
  <li>${model.title}</li>
  <li>${model.author}</li>
  <li>${model.year}</li>
</ul>
`
