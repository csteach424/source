//overall app logic and loader...
function travelNotes() {
    "use strict";

  //handle user event for `add` button click
  $(".note-input button").on("click", function(e) {
    $(".note-output").append("<p>sample note text...</p>");
  });

};

$(document).ready(travelNotes);
