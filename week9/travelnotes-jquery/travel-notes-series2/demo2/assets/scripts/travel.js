//overall app logic and loader...
function travelNotes() {
  "use strict";

  //check element visibility - expects single element relative to display:none
  function checkVisible(element) {
    if (element.is(":hidden")) {
      element.fadeIn();
    }
  }

  //check elements exists
  function checkExist(element) {
    if (element.length) {
      return true;
    } else {
      return false;
    }
  }

  //manage input field and new note output
  function createNote() {
    //object for wrapper html for note
    var $note = $("<p>");
    //define input field
    var $note_text = $(".note-input input");
    //conditional check for input field
    if ($note_text.val() !== "") {
    //set content for note
    $note.html($note_text.val());
    //hide new note to setup fadeIn...
    $note.hide();
    //append note text to note-output
    $(".note-output").append($note);
    //fadeIn hidden new note
    $note.fadeIn("slow");
    $note_text.val("");
    checkVisible($(".note-controls"));
    }
  }

  //handle user event for `add` button click
  $(".note-input button").on("click", function(e) {
    createNote();
  });

  //handle user event for keyboard press
  $(".note-input input").on("keypress", function(e) {
    //check code for keyboard press
    if (e.keyCode === 13) {
      createNote();
    }
  });

  //handle deletion of all notes
  $("#notes-delete").on("click", function(e) {
    //set note selector
    var $note = $(".note-output p");
    //check $note exists
    if (checkExist($note) === true) {
      //hide note-controls
      $(this).parent().hide();
      //remove all notes
      $note.remove();
    }
  });

};

$(document).ready(travelNotes);
