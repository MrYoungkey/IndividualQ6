// Add username and password to local storage
localStorage.setItem("username", "yk");
localStorage.setItem("password", "yk");

// Handle login form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from submitting
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === localStorage.getItem("username") && password === localStorage.getItem("password")) {
    // Login successful, redirect to contact form
    window.location.href = "contact.html";
  } else {
    alert("Invalid username or password");
  }
});