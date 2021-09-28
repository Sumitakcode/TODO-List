const signForm = document.getElementById("signup-form");
const signUpButton = document.getElementById("signup-form-submit");
const loginErrorMsg = document.getElementById("");

// When the login button is clicked, the following code is executed
signUpButton.addEventListener("click", (e) => {
  // Prevent the default submission of the form
  e.preventDefault();
  // Get the values input by the user in the form fields
  const email = signForm.email.value;
  const password = signForm.password.value;
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  alert("successfully signup");
  window.location.href = "./todo/index.html";
});
