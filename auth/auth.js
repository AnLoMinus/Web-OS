// auth.js
const loginScreen = document.getElementById("login-screen");
const registerScreen = document.getElementById("register-screen");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const registerLink = document.getElementById("register-link");
const loginLink = document.getElementById("login-link");

let currentUser = null;

registerLink.addEventListener("click", (e) => {
  e.preventDefault();
  loginScreen.classList.remove("active");
  registerScreen.classList.add("active");
});

loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  registerScreen.classList.remove("active");
  loginScreen.classList.add("active");
});

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = await authenticateUser(username, password);
  if (user) {
    currentUser = user;
    loginScreen.classList.remove("active");
    initializeDesktop();
  } else {
    alert("שם משתמש או סיסמה שגויים");
  }
});

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("new-username").value;
  const password = document.getElementById("new-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("הסיסמאות אינן תואמות");
    return;
  }

  const success = await registerUser(username, password);
  if (success) {
    alert("ההרשמה הושלמה בהצלחה. אנא התחבר.");
    registerScreen.classList.remove("active");
    loginScreen.classList.add("active");
  } else {
    alert("שם המשתמש כבר קיים");
  }
});

async function authenticateUser(username, password) {
  const response = await fetch("auth/users.json");
  const users = await response.json();
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  return user || null;
}

async function registerUser(username, password) {
  const response = await fetch("auth/users.json");
  let users = await response.json();

  if (users.some((u) => u.username === username)) {
    return false;
  }

  users.push({ username, password });
  await saveUsers(users);
  return true;
}

async function saveUsers(users) {
  const response = await fetch("auth/users.json", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(users),
  });
  return response.ok;
}

function logout() {
  currentUser = null;
  loginScreen.classList.add("active");
}

// Export functions for use in main.js
window.auth = {
  currentUser,
  logout,
};
