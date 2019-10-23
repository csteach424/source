//load main app logic
function loadApp() {
  "use strict";

    //.get returns an object derived from a Deferred object - do not need explicit deferred object
    var $deferredNotesRequest = $.getJSON (
      "docs/json/notes.json",
      {format: "json"}
    );

    $deferredNotesRequest.done(function(response) {
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
    });

};
$(document).ready(loadApp);
