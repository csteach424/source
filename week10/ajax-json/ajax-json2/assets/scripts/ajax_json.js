//load main app logic
function loadApp() {
  "use strict";

    function buildNote(data) {
        //create each note's <p>
        var p = $("<p>");
        //add note text
        p.html(data);
        //append to DOM
        $(".note-output").append(p);
    }

    //get the notes JSON
    function getNotes() {
        //.get returns an object derived from a Deferred object - do not need explicit deferred object
        var $deferredNotesRequest = $.getJSON (
          "docs/json/notes.json",
          {format: "json"}
        );
        return $deferredNotesRequest;
    }

        getNotes().done(function(response) {
        //get travelNotes
        var $travelNotes = response.travelNotes
        //process travelNotes array
        $travelNotes.forEach(function(item) {
          if (item !== null) {
            var note = item.note;
            console.log(note);
            buildNote(note)
          }
        });
    });
};
$(document).ready(loadApp);
