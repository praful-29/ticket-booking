document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Dummy login check
    if (username === "user" && password === "pass") {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to home page
    } else {
        alert("Invalid username or password.");
    }
});
