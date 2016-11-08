//overall app logic and loader...
function travelNotes() {
  "use strict";

  //clear all input fields on initial app load
  $("input").val("");

  //use deferred object from getJson
  $.when(getNotes()).done(function(response) {
    //get travelNotes object
    var $travelNotes = response.travelNotes;
    //process travelNotes array
    $travelNotes.forEach(function(item) {
      //check each property
      if (item !== null) {
        //get note
        var note = item.note;
        //create each note for rendering
        createNote(note);
      }
    });//end foreach
  });

};

$(document).ready(travelNotes);
