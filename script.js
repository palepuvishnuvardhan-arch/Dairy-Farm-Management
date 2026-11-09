function submitBooking(event) {
  event.preventDefault();
  let name = document.getElementById("customerName").value.trim();
  let email = document.getElementById("customerEmail").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let product = document.getElementById("product").value;
  let quantity = document.getElementById("quantity").value;
  let message = document.getElementById("bookingMessage");
  if (
    name === "" ||
    email === "" ||
    phone === "" ||
    product === "" ||
    quantity === ""
  ) {
    message.textContent = "Please fill in all the fields.";
    message.style.color = "#d9534f";
    return;
  }
  let namePattern = /^[A-Za-z\s.]+$/;
  if (!namePattern.test(name)) {
    message.textContent =
      "Name can only contain letters, spaces, and full stops.";
    message.style.color = "#d9534f";
    return;
  }
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "#d9534f";
    return;
  }
  if (phone.length !== 10) {
    message.textContent = "Please enter a 10-digit phone number.";
    message.style.color = "#d9534f";

    return;
  }
  if (quantity <= 0) {
    message.textContent = "Quantity must be greater than 0.";
    message.style.color = "#d9534f";
    return;
  }
  message.textContent =
    "Booking successful! " +
    name +
    " ordered " +
    quantity +
    " units of " +
    product +
    ".";
  message.style.color = "#28a745";
}
function productChanged() {
  let product = document.getElementById("product").value;
  let message = document.getElementById("bookingMessage");
  if (product !== "") {
    message.textContent = "You selected: " + product;
    message.style.color = "#0088cc";
  } else {
    message.textContent = "";
  }
}
function toggleDarkMode() {
  let body = document.body;
  let btn = document.getElementById("darkModeBtn");
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    btn.innerHTML = "☀️ Light Mode";
  } else {
    btn.innerHTML = "🌙 Dark Mode";
  }
}
