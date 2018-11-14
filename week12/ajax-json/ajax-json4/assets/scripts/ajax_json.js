//load main app logic - v3
function loadApp() {
  "use strict";

    function buildImage(data) {
        //create each note's <p>
        var img = $("<img>");
        //add note text
        img.attr("src", data);
        //append to DOM
        $(".image-output").append(img);
    }

    //get the Flickr public feed JSON for images
    function getImages() {
        //.get returns an object derived from a Deferred object - do not need explicit deferred object
        var $deferredNotesRequest = $.getJSON (
          "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
          { tags: "cannes,france,boules",
            tagmode: "all",
            format: "json"
          });
        return $deferredNotesRequest;
    }

      $.when(getImages()).done(function(response) {
        console.log("done..."+response);
        //use jQuery's generic iterative function for the response...
        $.each( response.items, function( i, item ) {
        buildImage(item.media.m);
        //limit test images to 8
        if ( i === 7 ) {
          return false;
        }
      });
      });

};
$(document).ready(loadApp);
