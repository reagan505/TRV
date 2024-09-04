document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
  } else {
      alert("Sign up successful!");
      // Here you can handle form submission to the server
  }
});
