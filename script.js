const seats = document.querySelectorAll('.seat');
let selectedSeats = [];

// Event listener for seat selection
seats.forEach(seat => {
    seat.addEventListener('click', function() {
        const seatValue = this.getAttribute('data-seat');
        if (this.classList.contains('selected')) {
            this.classList.remove('selected');
            selectedSeats = selectedSeats.filter(seat => seat !== seatValue);
        } else {
            this.classList.add('selected');
            selectedSeats.push(seatValue);
        }
    });
});

// Confirm selection and proceed to payment
document.getElementById("confirmSelection").addEventListener("click", function() {
    if (selectedSeats.length > 0) {
        // Redirect to payment page with selected seats
        window.location.href = `payment.html?seats=${selectedSeats.join(",")}`;
    } else {
        alert("No seats selected.");
    }
});
