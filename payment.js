document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const cardNumber = document.getElementById("cardNumber").value;
    const cardHolder = document.getElementById("cardHolder").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;

    // Dummy payment processing check
    if (cardNumber && cardHolder && expiryDate && cvv) {
        alert("Payment successful!");
        window.location.href = "index.html"; // Redirect to home page
    } else {
        alert("Please fill in all payment details.");
    }
});
