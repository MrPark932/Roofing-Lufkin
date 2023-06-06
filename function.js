document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Perform basic validation
    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }
  
    if (email.trim() === "") {
      alert("Please enter your email.");
      return;
    }
  
    if (message.trim() === "") {
      alert("Please enter a message.");
      return;
    }
  
    // If all validation passes, you can perform further actions, such as sending the form data to a server or displaying a success message.
  
    // Reset the form
    document.getElementById("contactForm").reset();
  
    // Display a success message
    alert("Thank you for your message! We will get back to you soon.");
  });
  