const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
  // Prevent the default submission of the form
  e.preventDefault();
  // Get the values input by the user in the form fields
  const email = loginForm.email.value;
  const password = loginForm.password.value;

  if (
    email === localStorage.getItem("email") &&
    password === localStorage.getItem("password")
  ) {
    // If the credentials are valid, show an alert box and reload the page
    alert("You have successfully login.");
    location.reload();
    window.location.href = "./todo/index.html";
  } else {
    // Otherwise, make the login error message show (change its oppacity)
    alert("wrong credentials");
  }
});
