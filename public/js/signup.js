$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const usernameInput = $("input#username-input");
  const passwordInput = $("input#password-input");
  const aliasInput = $("input#alias-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim(),
      alias: aliasInput.val().trim()
    };

    if (!userData.username || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.username, userData.password, userData.alias);
    usernameInput.val("");
    passwordInput.val("");
    aliasInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the feed page
  // Otherwise we log any errors
  function signUpUser(username, password, alias) {
    $.post("/api/signup", {
      username: username,
      password: password,
      alias: alias
    })
      .then(() => {
        window.location.replace("/feed");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text("error");
    $("#alert").fadeIn(500);
  }
});
