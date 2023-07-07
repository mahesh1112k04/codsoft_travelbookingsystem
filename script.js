function submitBooking(event) {
  event.preventDefault();

  // Get form values
  const destination = document.getElementById("destination").value;
  const departureDate = document.getElementById("departure-date").value;
  const returnDate = document.getElementById("return-date").value;
  const passengers = document.getElementById("passengers").value;

  // Display booking details
  document.getElementById("destination-details").textContent = destination;
  document.getElementById("departure-date-details").textContent = departureDate;
  document.getElementById("return-date-details").textContent = returnDate;
  document.getElementById("passengers-details").textContent = passengers;

  // Show booking details section
  document.getElementById("booking-details").style.display = "block";
  document.getElementById("booking-status").textContent = "Booking confirmed!";
}
