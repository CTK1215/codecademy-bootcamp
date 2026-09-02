"use strict";

const modeBtn = document.querySelector(".screen-mode");
const form = document.querySelector(".auth-form");
const output = document.querySelector(".output");

let darkMode = false;

function setTheme(isDark) {
  document.body.classList.toggle("dark-mode", isDark);
  document.body.classList.toggle("light-mode", !isDark);
  modeBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
}

modeBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  setTheme(darkMode);
});

setTheme(darkMode);

// Business Logic

// Demo data only. Production applications must authenticate on a server and
// must never send or store plaintext passwords in browser code.
const db = [
  { email: "paul@codecademy.com", password: "dbLocal" },
  { email: "chris@gmail.com", password: "coolStuff123" },
  { email: "shreya@ceo.com", password: "iLikeCoolSTuff" },
];

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

function searchUser(email, users) {
  return users.find(
    (user) => normalizeEmail(user.email) === normalizeEmail(email),
  );
}

function validatePassword(requestPassword, storedPassword) {
  if (requestPassword === storedPassword) {
    return { success: true, message: "User Logged In" };
  }

  return { success: false, message: "Invalid email or password" };
}

function authService(request, users) {
  const foundUser = searchUser(request.email, users);

  // Use the same response for both failures to avoid revealing registered emails.
  if (!foundUser) {
    return { success: false, message: "Invalid email or password" };
  }

  return validatePassword(request.password, foundUser.password);
}

function render(result) {
  output.textContent = result.message;
}

form.addEventListener("submit", (event) => {
  // Handle mouse, keyboard, and assistive-technology submissions consistently.
  event.preventDefault();

  const request = {
    email: form.elements.email.value,
    password: form.elements.pwd.value,
  };

  render(authService(request, db));
});
