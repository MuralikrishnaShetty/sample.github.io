// Define authorized users (in a real application, this information would be stored securely on a server).
const authorizedUsers = [
    { username: "muralikrishnashetty90@gmail.com", password: "Assignment3" },
    { username: "greatLearning@gmail.com", password: "Assignment3" },
];

// Function to handle form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way.

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the entered credentials match any authorized user.
    const isAuthorized = authorizedUsers.some(user => user.username === username && user.password === password);

    if (isAuthorized) {
        document.getElementById("login-message").textContent = "Login successful!";
        // Redirect or grant access to the authorized user here.
        setTimeout(function() {
            window.location.href = "welcome.html"; 
        }, 1000);

    } else {
        document.getElementById("login-message").textContent = "Login failed. Please check your username and password.";
    }
});
