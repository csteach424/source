  /* json loading */

  //get the Flickr public feed JSON for images
  function getImages(data) {
    var img_tags = data;
      //.get returns an object derived from a Deferred object - do not need explicit deferred object
      var $deferredNotesRequest = $.getJSON (
        "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        { tags: img_tags,
          tagmode: "all",
          format: "json"
        });
        return $deferredNotesRequest;
      }

    //process image production, loading, and pass to rendering
    function processImages() {
      //check img visibility for contextual-output - clear existing images
      if (checkVisible($(".contextual-output img")) === false) {
        //empty existing images
        $(".contextual-output").empty();
      }
      //get data from image search input field
      var $img_data = getImageInput();
      //use image data to get images, and pass for rendering
      $.when(getImages($img_data)).done(function(response) {
        console.log("done..."+response);
        //use jQuery's generic iterative function for the response...
        $.each( response.items, function( i, item ) {
          createImage(item.media.m);
          //limit test images to 4
          if ( i === 5 ) {
            return false;
          }
        });
      });
    }

  /* image handlers, builders... */

  //get input value for image search
  function getImageInput() {
    //define img value
    var img_val = "";
    //define input field
    var $img_tags = $(".contextual-choice input");
    if ($img_tags.val() !== "") {
      img_val = $img_tags.val();
      return img_val;
    } else {
      return img_val;
    }
  }

  //manage new image output
  function createImage(data) {
    //create each image element
    var $img = $('<img class="flex-img">');
    if (data !== "") {
      //add image
      $img.attr("src", data);
      //clear image search value
      $(".contextual-choice input").val("");
      //append to DOM
      $(".contextual-output").append($img);
    }
  }

  //handle user event for image search button click
  $(".contextual-choice button").on("click", function(e) {
    //process images
    processImages();
  });

  //handle user event for keyboard press
  $(".contextual-choice input").on("keypress", function(e) {
    //check code for keyboard press
    if (e.keyCode === 13) {
      //process images
      processImages();
    }
  });
