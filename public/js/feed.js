$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  // $.get("/api/user_data").then(data => {
  //   $(".member-name").text(data.username);
  // });

  var posts;

  var postsContainer = $("#posts-container");

  // TODO: Get all the posts
  $.get("/api/posts", function (data) {
    console.log("Posts:", data);
    posts = data;
    if (!posts || !posts.length) {
      // Do nothing
    }
    else {
      renderPosts();
    }
  });

  function renderPosts() {

    postsContainer.empty();

    for (var i = posts.length - 1; i >= 0; i--) {

      var postDiv = $("<div>");

      var postTime = moment(posts[i].createdAt).calendar();

      postDiv.html(`<div class="card mx-auto m-4 pb-2 activity-card">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div>
            <h5 class="card-subtitle mb-2 author-name" id="authorName">${posts[i].UserUsername}</h5>
            <h3 class="card-title activity-label">${posts[i].ActivityName}</h3>
            <p class="card-text time-">${postTime}</p>
            <div class="d-flex align-items-center">
            </div>
          </div>
          <div class="emoji">
          ${posts[i].Activity.emoji};
          </div>
        </div>
      </div>
    </div>`);

      postsContainer.append(postDiv);
    }



  }

  // Render all the posts with a for loop
});
