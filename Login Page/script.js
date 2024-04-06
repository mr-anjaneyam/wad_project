document.addEventListener("DOMContentLoaded", function() {
    // Get the form and radio inputs
    var loginForm = document.getElementById("loginForm");
    var radioInputs = document.querySelectorAll('input[name="LoginType"]');
  
    // Add a submit event listener to the form
    loginForm.addEventListener("submit", function(event) {
      // Prevent the default form submission
      event.preventDefault();
  
      // Get the selected radio button
      var selectedRadio = document.querySelector('input[name="LoginType"]:checked');
  
      // Check if a radio button is selected
      if (selectedRadio) {
        // Get the value of the selected radio button
        var userType = selectedRadio.value;
  
        // Redirect based on the user type
        switch (userType) {
          case "User":
            window.location.href = "../Dashboard/User/index.html";
            break;
          case "Developer":
            window.location.href = "../Dashboard/Developer/index.html";
            break;
          case "Administrator":
            window.location.href = "../Dashboard/Administrator/index.html";
            break;
          default:
            // Handle other cases if needed
            break;
        }
      } else {
        // Display an error message or handle the case where no radio button is selected
        console.log("Please select a user type.");
      }
    });
  });
  