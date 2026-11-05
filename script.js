// Contact form validation
const form = document.getElementById("contactForm");
const errorBox = document.getElementById("formError");

form.addEventListener("submit", function (event) {
  // Stop the page from reloading
  event.preventDefault();

  const fields = [
    { id: "fullName", label: "Full name" },
    { id: "email", label: "Email address" },
    { id: "country", label: "Country" },
    { id: "comments", label: "Comments" }
  ];

  const missing = [];

  // Check every field is filled in
  fields.forEach(function (field) {
    const input = document.getElementById(field.id);
    if (input.value.trim() === "") {
      missing.push(field.label);
      input.classList.add("invalid");
    } else {
      input.classList.remove("invalid");
    }
  });

  if (missing.length > 0) {
    errorBox.textContent = "Please fill in: " + missing.join(", ") + ".";
    document.getElementById(fields.find(f => missing.includes(f.label)).id).focus();
    return;
  }

  // Simple email format check
  const email = document.getElementById("email");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    email.classList.add("invalid");
    errorBox.textContent = "Enter a valid email address, like name@example.com.";
    email.focus();
    return;
  }

  // Everything is filled in
  errorBox.textContent = "";
  alert("Thank you, " + document.getElementById("fullName").value.trim() +
        "! Your form was submitted successfully.");
  form.reset();
});

// Remove the red outline as soon as the visitor starts typing
form.addEventListener("input", function (event) {
  event.target.classList.remove("invalid");
});
