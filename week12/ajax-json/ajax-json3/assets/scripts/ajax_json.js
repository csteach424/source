//load main app logic - v3
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

    //get the places JSON
    function getPlaces() {
        //.get returns an object derived from a Deferred object - do not need explicit deferred object
        var $deferredPlacesRequest = $.getJSON (
          "docs/json/places.json",
          {format: "json"}
        );
        return $deferredPlacesRequest;
    }

      $.when(getNotes()).done(function(response) {
        console.log("done..."+response.travelNotes[0].note);
      });

      //test with .then()
      getNotes().then(function(response1) {
        //output test to console
        console.log("response1="+response1.travelNotes[2].note);
        //output test to DOM
        $(".note-output").append(response1.travelNotes[2].note);
        return getPlaces();
      }).then(function(response2) {
        console.log("response2="+response2.travelPlaces[2].place);
        $(".note-output").append(response2.travelPlaces[2].place);
      });


};
$(document).ready(loadApp);
