const toggleForm = (form) => {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  if (form === "signup") {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  } else {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  }
};

const login = () => {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value;

  const users = [
    { username: "__rajput.7", password: "123" },
    { username: "john", password: "doe123" },
    { username: "alice", password: "alice456" },
  ];

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    document.getElementById("login-form").style.display = "none";
    const loginMsg = document.getElementById("loginmsg");
    loginMsg.style.display = "block";
    loginMsg.textContent = `Welcome back, ${username}!`;
  } else {
    alert("Incorrect username or password. Please try again.");
    document.getElementById("login-password").value = "";
  }
};

const signup = () => {
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const Pass = document.getElementById("signup-password").value;
  const confirmPass = document.getElementById("signup-confirm-password").value;

  if (Pass !== confirmPass) {
    alert("Passwords do not match. Please enter the same password.");
  } else if (!name.trim()) {
    alert("Please enter a valid username.");
  } else if (!Pass.trim()) {
    alert("Please enter a password.");
  } else if (!email.trim()) {
    alert("Please enter a email.");
  } else {
    document.getElementById("signup-form").style.display = "none";

    const signupMsg = document.getElementById("signupmsg");
    signupMsg.style.display = "block";
    signupMsg.textContent = `Signup successful, ${name}!`;
  }
};
