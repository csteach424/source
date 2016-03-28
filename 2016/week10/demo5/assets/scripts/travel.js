//overall app logic and loader...
function travelNotes() {
  "use strict";

  //clear all input fields on initial app load
  $("input").val("");

  //use deferred promise object from getJson
  $.when(getNotes()).done(function(response) {
    //get travelNotes object
    var $travelNotes = response.travelNotes;
    //process travelNotes array
    $.each($travelNotes, function(i, item) {
      //check each property
      if (item !== null) {
        //get note
        var note = item.note;
        //create each note for rendering
        createNote(note);
      }
    });//end foreach
    //remove ajax spinner
    $(".spinner").remove();
  });
};

$(document).ready(travelNotes);
