//load main app logic
function loadApp() {
  "use strict";

  function buildNote(response) {
      //get travelNotes
      var $travelNotes = response.travelNotes
      //process travelNotes array
      $travelNotes.forEach(function(item) {
        if (item !== null) {
          var note = item.note;
          //create each note's <p>
          var p = $("<p>");
          //add note text
          p.html(note);
          //append to DOM
          $(".note-output").append(p);
        }
      });
  }

    $.getJSON("notes.json", function (response) {
      console.log("response = "+response.toSource());
      buildNote(response);
    })

};
$(document).ready(loadApp);
