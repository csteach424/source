//get body
var body = d3.select("body");

// append to body using chaining
body.append("div")
	.attr("id", "div1")
  .append("p")
	.attr("class", "para")
  .append("h5")
	.text("this is a paragraph heading...");
