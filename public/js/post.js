$(function() {

    $(".create-post").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newPost = {
            user: "This user (Test)",
            activity: "Test Activity",
            emoji: "Test Emoji",
            likes: 0
        };
    
        // Send the POST request.
        $.ajax("/api/post", {
          type: "POST",
          data: newPost
        }).then(
          function() {
            console.log("created new post");
            // // Reload the page to get the updated list
            location.replace = "/feed";
          }
        );
      });

});