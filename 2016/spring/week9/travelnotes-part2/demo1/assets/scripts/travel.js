//overall app logic and loader...
function travelNotes() {
  "use strict";

  //check element visibility - expects single element relative to display:none
  function checkVisible(element) {
    //check if element is hidden or not
    if (element.is(":hidden")) {
      return true;
    } else {
      return false;
    }
  }

  //check elements exists
  function checkExist(element) {
    //check specified elements or not - return boolean
    if (element.length) {
      return true;
    } else {
      return false;
    }
  }

  function createButton(buttonClass, buttonText) {
    //build button
    var $button = $('<button class="'+buttonClass+'">'+buttonText+'</button>');
    //return built button
    return $button;
  }

  //manage input field and new note output
  function createNote() {
    //object for wrapper html for note
    var $note = $("<p>");
    //create delete button
    var $delete_button = createButton("note-delete", "delete");
    //define input field
    var $note_text = $(".note-input input");
    //conditional check for input field
    if ($note_text.val() !== "") {
    //set content for note
    $note.html($note_text.val());
    //append delete button to each note
    $note.prepend($delete_button);
    //hide new note to setup fadeIn...
    $note.hide();
    //hide delete button until user selects note
    $delete_button.hide();
    //append note text to note-output
    $(".note-output").append($note);
    //fadeIn hidden new note
    $note.fadeIn("slow");
    //clear note value
    $note_text.val("");
    //check visibility of note controls
    if (checkVisible($(".note-controls")) === true) {
      $(".note-controls").fadeIn();
    }
    }
  }

  //handle user event for `add` button click
  $(".note-input button").on("click", function(e) {
    //call note builder function
    createNote();
  });

  //handle user event for keyboard press
  $(".note-input input").on("keypress", function(e) {
    //check code for keyboard press
    if (e.keyCode === 13) {
      createNote();
    }
  });

  //handle deletion of single note - bind to existing element...
  $(".note-output").on("click", "button.note-delete" , function() {
    //delete parent note
    $(this).parent().remove();
    //set note selector
    var $note = $(".note-output p");
    //check for empty notes, and then remove note-controls
      if (checkExist($note) === false) {
        //hide note-controls
        $(".note-controls").hide();
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

  //handle click event per note
  $(".note-output").on("click", "p", function() {
    //check if other delete buttons visible
    if (checkVisible($("button.note-delete")) === true) {
      //set all siblings to active=false to ensure checks are correct
      $(this).siblings().attr("active", "false");
      $("button.note-delete").hide();
    }
    //then handle click event for current note
    if (!$(this).attr("active") || $(this).attr("active") === "false") {
    $(this).attr("active", "true");
    $(this).children("button.note-delete").show();
    } else if ($(this).attr("active") === "true") {
    $(this).attr("active", "false");
    $(this).children("button.note-delete").hide();
    }
  });

};

$(document).ready(travelNotes);
