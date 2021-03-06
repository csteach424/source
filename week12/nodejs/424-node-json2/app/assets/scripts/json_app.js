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

    $(".note-input button").on("click", function() {
      //get values for new note
      var note_text = $(".note-input input").val();
      var created = new Date();
      //create new note
      var newNote = {"created":created, "note":note_text};
      //post new note to server
      $.post("notes", newNote, function (response) {
        console.log("server post response returned..." + response.toSource());
      })
    });

    $.getJSON("notes.json", function (response) {
      console.log("response = "+response.toSource());
      buildNote(response);
    })

};
$(document).ready(loadApp);
